import { UserBusiness } from "../../models/index.js";

const requestJoinToBusiness = async (req, res) => {
  const { id } = req.user;
  const { business_id } = req.body;
  try {
    const userBusiness = await UserBusiness.findOne({
      attributes: ["id"],
      where: {
        business_id,
        user_id: id,
      },
    });

    if (userBusiness) {
      res.status(400).send({
        error: "61 could not process the request. please try again.",
      });
      return;
    }
    // todo: add attributes in return of create()

    const userBusinessRequest = await UserBusiness.create({
      business_id,
      user_id: id,
    });
    if (userBusinessRequest) {
      // todo: reload
      res.send({ data: userBusinessRequest });
    } else {
      res.status(400).send({
        error: "62 could not process the request. please try again.",
      });
    }
  } catch (e) {
    res.status(400).send({
      error: e.message,
    });
  }
};

export default requestJoinToBusiness;
