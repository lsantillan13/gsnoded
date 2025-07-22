import express from 'express'; 
import morgan from 'morgan';

import {createRoles} from './libs/initialSetup.js';

import productsRoutes from './routes/products.routes.js';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';


const app = express();
createRoles(); // Initialize roles in the database

app.use(morgan('dev'));
app.use(express.json());


app.get('/', (req, res) => {
    res.json('Hello, World!');
});

app.use('/api/products', productsRoutes);
app.use('/api/auth', authRoutes); 
app.use('/api/users', userRoutes);


export default app;