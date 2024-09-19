import { Product } from "../../models/index.js";

const getProducts = async (req, res) => {
  const { business_id } = req.query;

  try {
    const products = await Product.findAll({
      attributes: ["id", "name", "max_quantity", "quantity", "price"],
      where: { business_id },
    });
    if (products) {
      res.send({
        data: products,
      });
    } else {
      res.status(400).send({
        error: "Failed to fetch products",
      });
    }
  } catch (err) {
    res.status(400).send({
      error: err.message,
    });
  }
};

export default getProducts;
