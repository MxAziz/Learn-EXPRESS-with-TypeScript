import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('welcome to the Products API');
});

router.post('/create-product', (req, res) => {
  res.send('create a new product');
});

router.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Route not found!',
  });
});


export default router;