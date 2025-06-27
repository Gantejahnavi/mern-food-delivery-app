import express from 'express'
import { addFood, listFood, removeFood } from '../controllers/foodController.js'
import multer from 'multer'

const router = express.Router();

// Image Storage Engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename: (req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

router.get('/latenight', async (req, res) => {
  try {
    const lateNightFoods = await Food.find({ lateNight: true });
    res.json(lateNightFoods);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch late-night foods' });
  }
});


const upload = multer({storage:storage})
router.post('/add',upload.single('image'),addFood)
router.get('/list',listFood)
router.post('/remove', removeFood)

export default router;