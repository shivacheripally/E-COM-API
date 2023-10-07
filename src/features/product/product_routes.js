const express = require('express');
const upload = require('../../middlewares/file_upload');
const productController = require("./product_controller");
const router = express.Router();

const product_controller = new productController();

router.get('/', product_controller.getAllProduct);
// router.get('/:id', product_controller.getOneProduct);
router.get('/filter', product_controller.filterProducts);

router.post('/', upload.single('imageUrl'), product_controller.addProduct);

module.exports = router;