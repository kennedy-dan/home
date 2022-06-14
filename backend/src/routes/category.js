const express = require("express");
const router = express.Router();
const { createCategory } = require("../controllers/category");





   


router.post("/category/create", createCategory);
// router.get('/category/getcategory', getCategory)
// router.post("/category/update",upload.array('categoryImage'),updateCategory);
// router.post("/category/delete",deleteCategory);


module.exports = router;
