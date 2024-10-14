import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Inicializa o Express
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define o diretório de build da aplicação
app.use(express.static(path.join(__dirname, 'dist')));

// Redireciona todas as requisições para o index.html para suportar SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Define a porta para o servidor (porta fornecida pelo Dokku ou porta padrão)
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
