import { Verification } from "../../models/index.js";

const verifyOtp = async (req, res) => {
  const { mobile_number, otp } = req.body;
  try {
    const verification = await Verification.findOne({
      attributes: ["id"],
      where: {
        mobile_number,
        code: otp,
      },
    });
    if (verification) {
      const updateVerification = await Verification.update(
        {
          code: null,
        },
        {
          where: {
            mobile_number,
          },
        }
      );
      if (updateVerification) {
        res.status(200).send({
          error: "verification success",
        });
      } else {
        res.status(200).send({
          error: "verification failed",
        });
      }
    } else {
      res.status(200).send({
        error: "verification failed",
      });
    }
  } catch (e) {
    res.status(400).send({
      error: e.message,
    });
  }
};

export default verifyOtp;
