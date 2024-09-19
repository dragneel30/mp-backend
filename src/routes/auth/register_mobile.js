import { User, Verification } from "../../models/index.js";
import { generateOtp } from "../../utils/index.js";

const register_mobile = async (req, res) => {
  const { mobile_number } = req.body;
  try {
    const user = await User.findOne({
      attributes: ["id"],
      where: {
        mobile_number,
      },
    });

    if (user) {
      res.status(200).send({
        error: {
          message: "mobile number already exist",
        },
      });
      return;
    }

    const otp = generateOtp();

    const newVerification = await Verification.upsert(
      {
        mobile_number,
        code: otp,
      },
      {
        where: {
          mobile_number,
        },
      }
    );

    if (newVerification) {
      //todo: send otp to email or sms
      res.status(200).send({
        message: "otp sent",
      });
    } else {
      res.status(200).send({
        error: {
          message: "unable to create otp",
        },
      });
    }
  } catch (e) {
    res.status(400).send({
      error: e.message,
    });
  }
};

export default register_mobile;
