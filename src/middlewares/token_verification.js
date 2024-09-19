import jwt from "jsonwebtoken";

const tokenVerification = (req, res, next) => {
  const authorization = req.headers["authorization"];
  try {
    if (authorization) {
      const bearer = authorization.split(" ");
      const token = bearer[1];

      const user = jwt.verify(token, process.env.JWT_SECRET);

      if (user) {
        req.user = user;
        next();
      } else {
        console.log("tokenVerification failed");
        res.sendStatus(403);
      }
    } else {
      console.log("tokenVerification failed");
      res.sendStatus(403);
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export default tokenVerification;
