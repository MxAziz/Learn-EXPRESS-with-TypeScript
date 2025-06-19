import express from 'express';
const router = express.Router();

router.get('/see', (req, res) => {
  res.send('সব ইউজার');
});

router.post('/add', (req, res) => {
  res.send('নতুন ইউজার তৈরি হয়েছে');
});

router.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Route not found!',
  });
});


export default router;