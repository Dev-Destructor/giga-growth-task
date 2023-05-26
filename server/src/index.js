const express = require("express");
const { transporter } = require("./config/nodemailer");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/mail/send", (req, res) => {
  const { email, name, company, date, data } = req.body;

  const mailOptions = {
    from: "dev.debobratapal@gmail.com",
    to: `${email}`,
    subject: `Stock price of ${company} on ${date}`,
    text: `Hi ${name}, the stock price of ${company} on ${date} is open: ${data["1. open"]}, close: ${data["4. close"]}, high: ${data["2. high"]}, low: ${data["3. low"]}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Error" });
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).json({ message: "Email sent" });
    }
  });
});

app.listen(3001, () => {
  console.log("Example app listening on port 3001!");
});
