import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import menuRoutes from './routes/menuRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/menus', menuRoutes);

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
})