import { Business, UserBusiness } from "../../models/index.js";

const getUserBusinesses = async (req, res) => {
  const { id } = req.user;
  try {
    const userBusinesses = await Business.findAll({
      raw: true,
      attributes: [
        "id",
        "name",
        "current_resellers_count",
        "max_resellers_count",
        "user_businesses.status",
      ],
      include: [
        {
          model: UserBusiness,
          where: { user_id: id },
          attributes: [],
        },
      ],
    });

    if (userBusinesses) {
      res.send({
        data: userBusinesses,
      });
    } else {
      res.status(400).send({
        error: "unable to fetch business list.",
      });
    }
  } catch (err) {
    res.status(400).send({
      error: err.message,
    });
  }
};

export default getUserBusinesses;
