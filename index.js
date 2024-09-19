import bodyParser from "body-parser";
import "dotenv/config";
import express from "express";
import sequelize from "./src/config/db.js";

import {
  fileValidation,
  requestValidation,
  tokenVerification,
} from "./src/middlewares/index.js";

import { avatar_upload } from "./src/config/fileStorage.js";
import {
  charge,
  generateLink,
  getBusinesses,
  getProduct,
  getProducts,
  getUserBusinesses,
  invoice,
  login,
  register_mobile,
  register_user,
  requestJoinToBusiness,
  updateUser,
  verifyOtp,
} from "./src/routes/index.js";

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

sequelize.authenticate();

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}!`);
});

app.post("/charge/test", charge);
app.post("/invoice/test", invoice);
app.post("/login", login);
app.post("/register/user", avatar_upload, fileValidation, register_user);
app.post("/register/mobile", register_mobile);
app.post("/verification/otp", requestValidation, verifyOtp);
app.post("/user/edit", tokenVerification, updateUser);
app.get("/businesses", tokenVerification, getBusinesses);
app.get("/product", requestValidation, tokenVerification, getProduct);
app.get("/products", requestValidation, tokenVerification, getProducts);
app.get("/link/generate", requestValidation, tokenVerification, generateLink);
app.get(
  "/user/businesses",
  requestValidation,
  tokenVerification,
  getUserBusinesses
);
app.post(
  "/business/join",
  requestValidation,
  tokenVerification,
  requestJoinToBusiness
);

export default app;
