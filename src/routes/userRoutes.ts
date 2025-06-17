import express from 'express';
const router = express.Router();

router.get('/see', (req, res) => {
  res.send('সব ইউজার');
});

router.post('/add', (req, res) => {
  res.send('নতুন ইউজার তৈরি হয়েছে');
});




export default router;