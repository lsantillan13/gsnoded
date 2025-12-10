<body class="bg-gray-50 min-h-screen flex items-center justify-center p-4">
    <div class="max-w-4xl w-full">
        <!-- Título principal -->
        <div class="text-center mb-10">
            <h1 class="text-3xl font-bold text-gray-800 mb-3">CATEGORÍAS DE PRODUCTOS</h1>
            <p class="text-gray-600 max-w-2xl mx-auto">Explora nuestras diferentes categorías y encuentra lo que necesitas</p>
        </div>
        
        <!-- Card Principal con todas las categorías -->
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden card-hover">
            <!-- Header del card -->
            <div class="gradient-bg p-6 text-white">
                <div class="flex justify-between items-center">
                    <div>
                        <h2 class="text-2xl font-bold">Catálogo Completo</h2>
                        <p class="opacity-90">Todos nuestros productos organizados por categorías</p>
                    </div>
                    <div class="bg-white text-purple-700 font-bold px-4 py-2 rounded-lg">
                        <i class="fas fa-tags mr-2"></i>3 Categorías
                    </div>
                </div>
            </div>
            
            <!-- Contenido del card -->
            <div class="p-6">
                <!-- Categoría 1: SEGURIDAD - HOSPITALARIOS Y LIMPIEZA -->
                <div class="mb-8 pb-6 border-b border-gray-200">
                    <div class="flex items-center mb-4">
                        <div class="bg-blue-100 p-3 rounded-lg mr-4">
                            <i class="fas fa-shield-alt text-blue-600 text-xl"></i>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-gray-800">SEGURIDAD - HOSPITALARIOS Y LIMPIEZA</h3>
                            <p class="text-gray-600 text-sm">Productos de protección y limpieza para entornos hospitalarios e industriales</p>
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <span class="category-badge bg-blue-100 text-blue-800">Camisolines</span>
                        <span class="category-badge bg-blue-100 text-blue-800">Guantes Látex</span>
                        <span class="category-badge bg-blue-100 text-blue-800">Guantes Nitrilo</span>
                        <span class="category-badge bg-blue-100 text-blue-800">Cofias</span>
                        <span class="category-badge bg-blue-100 text-blue-800">Botas</span>
                    </div>
                </div>
                
                <!-- Categoría 2: REGALOS EMPRESARIALES -->
                <div class="mb-8 pb-6 border-b border-gray-200">
                    <div class="flex items-center mb-4">
                        <div class="bg-green-100 p-3 rounded-lg mr-4">
                            <i class="fas fa-gift text-green-600 text-xl"></i>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-gray-800">REGALOS EMPRESARIALES</h3>
                            <p class="text-gray-600 text-sm">Artículos promocionales y corporativos para empresas</p>
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <span class="category-badge bg-green-100 text-green-800">Sado y Mate</span>
                        <span class="category-badge bg-green-100 text-green-800">Termos y Jarros</span>
                        <span class="category-badge bg-green-100 text-green-800">Botellas y Tazas</span>
                        <span class="category-badge bg-green-100 text-green-800">Congresos y Oficina</span>
                        <span class="category-badge bg-green-100 text-green-800">Trofeos y Placas</span>
                        <span class="category-badge bg-green-100 text-green-800">Medallas - Pins</span>
                        <span class="category-badge bg-green-100 text-green-800">Tecnología</span>
                        <span class="category-badge bg-green-100 text-green-800">Playa y Tiempo Libre</span>
                        <span class="category-badge bg-green-100 text-green-800">Gorros y Sombreros</span>
                        <span class="category-badge bg-green-100 text-green-800">Mochilas y Marroquinería</span>
                        <span class="category-badge bg-green-100 text-green-800">Bolígrafos</span>
                    </div>
                </div>
                
                <!-- Categoría 3: INDUMENTARIA -->
                <div class="mb-4">
                    <div class="flex items-center mb-4">
                        <div class="bg-purple-100 p-3 rounded-lg mr-4">
                            <i class="fas fa-tshirt text-purple-600 text-xl"></i>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-gray-800">INDUMENTARIA</h3>
                            <p class="text-gray-600 text-sm">Ropa para diferentes usos y ocasiones</p>
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <span class="category-badge bg-purple-100 text-purple-800">Indumentaria Deportiva</span>
                        <span class="category-badge bg-purple-100 text-purple-800">De Trabajo Básica</span>
                        <span class="category-badge bg-purple-100 text-purple-800">De Trabajo Premium</span>
                        <span class="category-badge bg-purple-100 text-purple-800">Promocional</span>
                        <span class="category-badge bg-purple-100 text-purple-800">Camperas Exclusivas</span>
                        <span class="category-badge bg-purple-100 text-purple-800">Bolsos Petroleros</span>
                    </div>
                </div>
            </div>
            
            <!-- Footer del card -->
            <div class="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <div class="flex justify-between items-center">
                    <div class="text-sm text-gray-600">
                        <i class="far fa-clock mr-1"></i> Actualizado hace 2 horas
                    </div>
                    <div class="flex space-x-3">
                        <button class="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition duration-300 flex items-center">
                            <i class="far fa-heart mr-2"></i> Guardar
                        </button>
                        <button class="gradient-bg text-white px-4 py-2 rounded-lg hover:opacity-90 transition duration-300 flex items-center">
                            <i class="fas fa-shopping-cart mr-2"></i> Ver Catálogo
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Información adicional -->
        <div class="mt-8 text-center text-gray-600 text-sm">
            <p>¿Necesitas ayuda para encontrar un producto específico? <a href="#" class="text-purple-600 font-medium hover:underline">Contáctanos</a></p>
        </div>
    </div>
</body>