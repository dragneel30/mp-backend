import sequelize from "../../config/db.js";
import { Business, UserBusiness } from "../../models/index.js";

const getBusinesses = async (req, res) => {
  const { id } = req.user;
  try {
    const userBusinesses = await Business.findAll({
      raw: true,
      attributes: [
        "id",
        "name",
        "current_resellers_count",
        "max_resellers_count",
        [
          sequelize.cast(
            sequelize.fn(
              "IFNULL",
              sequelize.col("user_businesses.status"),
              "1"
            ),
            "unsigned"
          ),
          "status",
        ],
      ],
      include: [
        {
          model: UserBusiness,
          where: { user_id: id },
          required: false,
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
        error: "Failed to fetch businesses",
      });
    }
  } catch (err) {
    res.status(400).send({
      error: err.message,
    });
  }
};
export default getBusinesses;
