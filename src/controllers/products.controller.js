import Product from '../models/Product.js';

// Definir secciones del homepage (puedes mover esto a un archivo de configuración)
const HOMEPAGE_SECTIONS = [
  { id: 'novedades', name: 'Novedades y Oportunidades', slug: 'novedades' },
  { id: 'regalos-empresariales', name: 'Regalos Empresariales', slug: 'regalos-empresariales' },
  { id: 'articulos-promocionales', name: 'Artículos Promocionales', slug: 'articulos-promocionales' },
  { id: 'indumentaria-deportiva', name: 'Indumentaria Deportiva', slug: 'indumentaria-deportiva' },
  { id: 'indumentaria-trabajo', name: 'Indumentaria de Trabajo', slug: 'indumentaria-trabajo' },
  { id: 'egresados', name: 'Egresados', slug: 'egresados' },
  { id: 'verano', name: 'Verano', slug: 'verano' },
  { id: 'gorras', name: 'Gorras', slug: 'gorras' }
];

// Crear producto
export const createProduct = async (req, res) => {
  try {
    const { 
      name, 
      description, 
      imageUrl, 
      images, 
      category, 
      subcategory, 
      brand, 
      productStatus,
      isNew,
      featuredIn 
    } = req.body;

    // Convertir string de imágenes a array si viene como string
    let imagesArray = [];
    if (images && typeof images === 'string') {
      imagesArray = images.split(',').map(img => img.trim()).filter(img => img !== '');
    } else if (Array.isArray(images)) {
      imagesArray = images;
    }

    const newProduct = new Product({
      name,
      description,
      imageUrl,
      images: imagesArray,
      category,
      subcategory,
      brand: brand || '',
      productStatus: productStatus !== undefined ? productStatus : true,
      isNew: isNew || false,
      featuredIn: featuredIn || [],
      labelType: req.body.labelType || []
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener todos los productos con filtros
export const getProducts = async (req, res) => {
  try {
    const { 
      category, 
      isNew, 
      featuredIn, 
      productStatus,
      search 
    } = req.query;
    
    let filter = {};

    // Filtro por categoría
    if (category) {
      filter.category = category;
    }

    // Filtro por novedades
    if (isNew === 'true') {
      filter.isNew = true;
    }

    // Filtro por sección destacada
    if (featuredIn) {
      filter.featuredIn = featuredIn;
    }

    // Filtro por estado
    if (productStatus !== undefined) {
      filter.productStatus = productStatus === 'true';
    }

    // Búsqueda por texto (nombre, descripción, marca)
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { brand: { $regex: search, $options: 'i' } }
      ];
    }

    const products = await Product.find(filter)
      .sort({ createdAt: -1 })
      .select('-__v');
    
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener productos por sección destacada
export const getProductsBySection = async (req, res) => {
  try {
    const { sectionSlug } = req.params;
    
    // Validar que la sección existe
    const section = HOMEPAGE_SECTIONS.find(s => s.slug === sectionSlug);
    if (!section) {
      return res.status(404).json({ message: 'Sección no encontrada' });
    }

    const products = await Product.find({
      featuredIn: section.id,
      productStatus: true
    })
    .sort({ createdAt: -1 })
    .select('-__v');
    
    res.json({
      section,
      products,
      count: products.length
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un producto por ID
export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).select('-__v');
    
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar producto
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body };

    // Procesar imágenes si vienen como string
    if (updateData.images && typeof updateData.images === 'string') {
      updateData.images = updateData.images
        .split(',')
        .map(img => img.trim())
        .filter(img => img !== '');
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    ).select('-__v');

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar producto
export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    
    res.json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener las secciones del homepage
export const getHomepageSections = async (req, res) => {
  try {
    // Obtener conteo de productos por sección
    const sectionsWithCounts = await Promise.all(
      HOMEPAGE_SECTIONS.map(async (section) => {
        const count = await Product.countDocuments({
          featuredIn: section.id,
          productStatus: true
        });
        return {
          ...section,
          productCount: count
        };
      })
    );

    res.json(sectionsWithCounts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Alternar producto en sección destacada
export const toggleFeaturedSection = async (req, res) => {
  try {
    const { id, sectionSlug } = req.params;
    const { action } = req.body; // 'add' o 'remove' (opcional)

    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    const section = HOMEPAGE_SECTIONS.find(s => s.slug === sectionSlug);
    if (!section) {
      return res.status(404).json({ message: 'Sección no encontrada' });
    }

    const currentSections = product.featuredIn || [];
    const isInSection = currentSections.includes(section.id);

    let newSections;
    
    // Si se especifica acción, usarla; de lo contrario, alternar
    if (action === 'add' && !isInSection) {
      newSections = [...currentSections, section.id];
    } else if (action === 'remove' && isInSection) {
      newSections = currentSections.filter(s => s !== section.id);
    } else {
      // Alternar si no se especifica acción
      newSections = isInSection
        ? currentSections.filter(s => s !== section.id)
        : [...currentSections, section.id];
    }

    // Actualizar producto
    product.featuredIn = newSections;
    await product.save();

    res.json({
      ...product.toObject(),
      featuredIn: newSections
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};