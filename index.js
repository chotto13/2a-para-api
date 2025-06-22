require('dotenv').config();
const express = require('express');
const cors    = require('cors');

const app  = express();
const PORT = process.env.PORT || 4000;

// ── middleware ───────────────────────────────────────
app.use(cors());
app.use(express.json());

// ── dummy data (we'll delete this in 5-B) ────────────
const products = [
  {
    _id: 'p1',
    name: 'Avène Cleanance Gel 200 ml',
    brand: 'Avène',
    price: 109,
    image: 'https://dummyimage.com/300x300/eee/333&text=Avene'
  },
  {
    _id: 'p2',
    name: 'SVR Sun Secure SPF50+',
    brand: 'SVR',
    price: 159,
    image: 'https://dummyimage.com/300x300/eee/333&text=SVR'
  }
];

// ── routes ───────────────────────────────────────────
app.get('/', (_req, res) => {
  res.send('2A-PARA API is running 🚀');
});

app.get('/api/products', (_req, res) => {
  res.json(products);
});

// ── launch ───────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🟢 Server on http://localhost:${PORT}`);
});
const connectDB = require('./db');
const Product   = require('./models/Product');

connectDB();

// GET /api/products (async from DB)
app.get('/api/products', async (_req, res) => {
  const items = await Product.find();
  res.json(items);
});
