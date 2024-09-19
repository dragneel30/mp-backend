import Business from "./business.js";
import Product from "./product.js";
import User from "./User.js";
import UserBusiness from "./user_business.js";
import Verification from "./verification.js";

Business.hasMany(UserBusiness, {
  foreignKey: "business_id",
});

UserBusiness.belongsTo(Business, {
  foreignKey: "id",
});

export { Business, Product, User, UserBusiness, Verification };
