import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
const PORT = 5000;

dotenv.config();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`This is Home Page with env API_KEY=${process.env.API_KEY}`);
});

app.post('/login-action', (req, res) => {
  res.send('Do Auth');
});

app.delete('/delete-user', (req, res) => {
  res.send('Delete Process');
});

app.put('/profile-update', (req, res) => {
  res.send('Do Profile Update');
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
