const generateLink = async (req, res) => {
  const { id } = req.user;
  const { business_id, product_id } = req.query;
  try {
    const datetime = new Date();

    const code = Buffer.from(
      `${datetime.getTime()}=${id}'${business_id}'${product_id}`
    ).toString("base64");

    res.send({
      data: {
        url: `${process.env.CHECKOUT_URL}/${code}`,
      },
    });
  } catch (e) {
    res.status(400).send({
      error: e.message,
    });
  }
};

export default generateLink;
