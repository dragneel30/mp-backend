import { Product } from "../../models/index.js";

const getProduct = async (req, res) => {
  const { product_id } = req.query;

  try {
    //todo findByPk()
    const product = await Product.findOne({
      attributes: ["name", "max_quantity", "quantity", "price"],
      where: { id: product_id },
    });
    if (product) {
      res.send({
        data: product,
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

export default getProduct;
