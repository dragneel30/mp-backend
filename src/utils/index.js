import crypto from "crypto";
import jwt from "jsonwebtoken";

const jwtEncode = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET);
};

const generateOtp = () => {
  const allowsChars = "0123456789";
  const length = 6;
  let password = "";

  while (password.length < length) {
    const charIndex = crypto.randomInt(0, allowsChars.length);
    if (password.length === 0 && allowsChars[charIndex] === "0") {
      continue;
    }
    password += allowsChars[charIndex];
  }
  return password;
};

export { generateOtp, jwtEncode };
