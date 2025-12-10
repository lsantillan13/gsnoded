import Product from '../models/Product.js';

export const createProduct = async (req, res) => {
    const { name, description, imageUrl, images, category, fatherCategory, brand, productStatus } = req.body;

    const newProduct = new Product({
        name,
        description,
        imageUrl,
        images,
        category,
        fatherCategory,
        brand,
        createdAt: new Date(), 
        productStatus,
        labelType: req.body.labelType || []
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
}

export const getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
}

export const getProduct = async (req, res) => {
    const product = await Product.findById(req.params.id)
        .then(product => {
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.json(product);
        })
        .catch(err => res.status(500).json({ message: err.message }));
}

export const updateProduct = async (req, res) => {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json(updatedProduct);

}


export const deleteProduct = async (req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
        return res.status(404).json({ message: 'Product not found' });
    }

    res.status(204).json();
}