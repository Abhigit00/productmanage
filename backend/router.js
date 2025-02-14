const express = require('express');
const router = express.Router();
const model = require('./model');

router.post('/post', async (req, res) => {
  const { id, title, subtitle, price } = req.body;
  try {
    const newModel = new model({
      id,
      title,
      subtitle,
      price
    });
    await newModel.save();
    res.status(200).json({ message: "Product details stored" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error in storing product details" });
  }
});

router.get('/get', async (req, res) => {
  try {
    const products = await model.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await model.findByIdAndDelete(id);
    res.status(200).json({ message: "Successfully deleted product details", deleted });
  } catch (error) {
    res.status(400).json({ message: "Error in deleting" });
  }
});

module.exports = router;
