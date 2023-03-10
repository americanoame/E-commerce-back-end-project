
const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data

  router.get('/', async (req, res) => {
    try {
      const tagData = await Tag.findAll({
        include: [
          {
            model: Product,
            attributes: ['id', 'product_name', 'price', 'stock'],
          },
        ],
      });
      res.status(200).json(tagData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data

  router.get('/:id', async (req, res) => {
    try {
      const tagData = await Tag.findByPk(req.params.id, {
        include: [
          {
            model: Product,
            attributes: ['id', 'product_name', 'price', 'stock'],
          },
        ],
      });
      res.status(200).json(tagData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  // create a new tag
  router.post('/', async (req, res) => {
    try {
      const tagData = await Tag.create(req.body);
      res.status(200).json(tagData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
});


router.post('/', (req, res) => {
  // create a new tag

  router.post('/', async (req, res) => {
    try {
      const tagData = await Tag.create(req.body);
      res.status(200).json(tagData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  router.put('/:id', async (req, res) => {
    try {
    const tagData = await Tag.update(
      {
        tag_name: req.body.tag_name,
      },
      {
        where: {
          id: req.params.id,
        },
      },
    );
    res.status(200).json(tagData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  router.delete('/:id', async (req, res) => {
    try {
      const tagData = await Tag.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(tagData);
      } catch (err) {
        res.status(500).json(err);
      }
  });
});

module.exports = router;
