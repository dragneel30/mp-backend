const request_constraints = [
  { route: "/products", request_type: "get", required_fields: ["business_id"] },
  { route: "/product", request_type: "get", required_fields: ["product_id"] },
  {
    route: "/verification/otp",
    request_type: "post",
    required_fields: ["otp", "mobile_number"],
  },
];

const requestValidation = (req, res, next) => {
  const url_query = req.originalUrl;
  const route = url_query.split("?")[0];

  const constraint = request_constraints.find((e) => route === e.route);

  if (!constraint) {
    next();
    return;
  }

  const { request_type, required_fields } = constraint;

  for (const field of required_fields) {
    if (request_type === "get") {
      if (req.query[field] === null || req.query[field] === undefined) {
        res.status(400).send({ error: `${field} is required` });
        return;
      }
    } else if (request_type === "post") {
      if (req.body[field] === null || req.body[field] === undefined) {
        res.status(400).send({ error: `${field} is required` });
        return;
      }
    }
  }
  next();
};

export default requestValidation;
