const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
   
  router.get('/', async (req, res) => {
    try {
      const categoryData = await Category.findAll({ include: Product });
      res.status(200).json(categoryData);
    } catch (err) {
    res.status(500).json(err)
    }
  });


});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  router.get('/:id', async (req, res) => {
    try {
      const categoryData = await Category.findByPk(req.params.id, { include: Product });
      res.json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

});

router.post('/', (req, res) => {
  // create a new category

  router.post('/', async (req, res) => {
    try {
      const categoryData = await Category.create(req.body);
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  router.put('/:id', async (req, res) => {
    try {
    const categoryData = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      },
    );
    res.status(200).json(categoryData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value

  router.delete('/:id', async (req, res) => {
    try {
      const categoryData = await Category.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(categoryData);
      } catch (err) {
        res.status(500).json(err);
      }
  });

});

module.exports = router;
