import { User } from "../../models/index.js";

const register = async (req, res) => {
  const {
    firstname,
    lastname,
    mobile_number,
    birthday,
    gender,
    username,
    bio,
    mpin,
    filename,
  } = req.body;
  try {
    const user = await User.create({
      firstname,
      lastname,
      mobile_number,
      birthday,
      gender,
      username,
      bio,
      mpin,
      avatar: filename,
      role: 1,
    });
    if (user) {
      res.send({
        data: {
          user,
        },
      });
    } else {
      res.status(400).send({
        error: {
          message: "unable to create user",
        },
      });
    }
  } catch (e) {
    res.status(400).send({
      error: e,
    });
  }
};

export default register;
