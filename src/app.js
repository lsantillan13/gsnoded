import express from 'express'; 
import morgan from 'morgan';
import cors from 'cors'; // Importa el paquete cors

import {createRoles} from './libs/initialSetup.js';

import productsRoutes from './routes/products.routes.js';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';


const app = express();
createRoles(); // Initialize roles in the database

app.use(morgan('dev'));
app.use(express.json());

// --- Configuración de CORS ---
// Es crucial que el middleware de CORS se use antes de tus rutas.
app.use(cors({
  origin: '*', // ¡IMPORTANTE! Reemplaza con la URL de tu frontend React.
                                   // Por ejemplo, si tu React corre en 5173, sería 'http://localhost:5173'
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Asegúrate de incluir OPTIONS aquí
  allowedHeaders: ['Content-Type', 'Authorization'], // Incluye los headers que tu frontend enviará
  credentials: true // Si tu frontend necesita enviar cookies o credenciales con la petición
}));
// --- Fin Configuración de CORS ---


app.get('/', (req, res) => {
  res.json('Hello, World!');
});

app.use('/api/products', productsRoutes);
app.use('/api/auth', authRoutes); 
app.use('/api/users', userRoutes);


export default app;