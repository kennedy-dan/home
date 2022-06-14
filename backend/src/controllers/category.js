const slugify = require("slugify");
const Category = require("../model/category");
const shortId = require('shortid')

exports.createCategory = (req, res) => {
    const categoryObj = {
      name: req.body.name,
      slug: `${slugify(req.body.name)}-${shortId.generate()}`,
    };
  
    const cat = new Category(categoryObj);
    cat.save((err, category) => {
      if (err) return res.status(400).json({ err });
      if (category) return res.status(201).json({ category });
    });
  };