import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import transactionRoutes from './routes/transactions.js';

const app = express();
app.use(cors());
app.use(express.json());

// Conecte ao MongoDB (substitua pela sua URL)
mongoose.connect("mongodb+srv://seuUsuario:suasenha@cluster0.mongodb.net/finances?retryWrites=true&w=majority");

// Rotas
app.use('/api/transactions', transactionRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js');
    });
  }