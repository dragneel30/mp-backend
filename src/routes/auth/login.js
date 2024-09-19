import { User } from "../../models/index.js";
import { jwtEncode } from "../../utils/index.js";

const login = async (req, res) => {
  console.log("login attempt: ", req.body.mobile_number);
  const { mobile_number, mpin } = req.body;

  try {
    const user = await User.findOne({
      attributes: [
        "id",
        "mobile_number",
        "firstname",
        "lastname",
        "birthday",
        "gender",
        "username",
        "bio",
        "profile_picture",
        "mpin",
      ],
      where: { mobile_number },
    });

    if (mpin === user.mpin) {
      const token = jwtEncode({ id: user.id });

      const result = { ...user.dataValues };
      delete result.mpin;
      res.header("auth-token", token).send({
        data: {
          user: result,
        },
      });
    } else {
      res.status(400).send({
        error: "Invalid mpin",
      });
    }
  } catch (err) {
    res.status(400).send({
      error: err.message,
    });
  }
};

export default login;
