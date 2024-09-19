import axios from "axios";

const invoice = async (req, res) => {
  const { data } = await axios.post(
    "https://api.xendit.co/v2/invoices",
    {
      external_id: `test1`,
      should_send_email: true,
      amount: "4422",
      payer_email: "canaalberona30.lh@gmail.com",
      description: "testing",
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

export default invoice;
