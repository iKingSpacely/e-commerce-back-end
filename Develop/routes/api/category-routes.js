const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const allCategories = await Category.findAll();
    res.status(200).json(allCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const oneCat = await Category.findByPk(req.params.id, {
      include: [{ model: Category, through: Product, as: 'category_id' }]
    });

    if (!oneCat) {
      res.status(404).json({ message: 'Cannot find category ID!' });
      return;
    }
    res.status(200).json(oneCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const createCat = await Category.create(req.body);
    res.status(200).json(createCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCat = await Category.update({
      where: {
        id: req.params.id
      }
    });
    
    if (!updateCat) {
      res.status(404).json({ message: 'Cannot find category ID!'});
      return;
    }
    res.status(200).json(updateCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteCat = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!deleteCat) {
      res.status(404).json({ message: 'Cannot find category ID!' });
      return;
    }
    res.status(200).json(deleteCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
