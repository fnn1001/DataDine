const express = require("express");

const router = express.Router();
const ItemsAdmin = require("../models/ItemsAdmin.model");

router.get("/add-meals-form", (req, res, next) => {
  console.log("***************");
  res.render("admin/admin");
});

router.post("/add-meals-form", (req, res, next) => {
  const { itemName, itemDescription, itemCategory, itemPrice, itemImageURL } =
    req.body;
  console.log("*********");

  ItemsAdmin.create({
    itemName,
    itemDescription,
    itemCategory,
    itemPrice,
    itemImageURL,
  })
    .then((createdProduct) => {
      console.log(`Your ${createdProduct} was successfully created!`);
      res.render("/admin/add-meals-form"); // Redirect after creating the product
    })
    .catch((err) => {
      next(err);
    });
});
router.get("/", (req, res, next) => {
  ItemsAdmin.find().then((data) => {
    res.render("admin/admin", { data });
  });
});

module.exports = router;
