import axios from "axios";

const charge = async (req, res) => {
  //https://developers.xendit.co/api-reference/#create-ewallet-charge
  const { data } = await axios.post(
    "https://api.xendit.co/ewallets/charges",
    {
      reference_id: "test-reference",
      currency: "PHP",
      amount: 100,
      checkout_method: "ONE_TIME_PAYMENT",
      channel_code: "PH_GRABPAY",
      channel_properties: {
        success_redirect_url: "https://redirect.me/payment",
        failure_redirect_url: "https://redirect.me/payment",
      },
    },
    {
      auth: {
        username:
          "xnd_development_rdg3JfZHqyx9TzGtgvNXyYJQ3gPfjJ0vxcNKEhyt5NmNJFlWjlnWp58iCSFfy",
        password: "",
      },
    }
  );

  res.status(200).send(data);
};

export default charge;
