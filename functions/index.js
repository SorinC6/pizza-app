const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const htmlToText = require("nodemailer-html-to-text").htmlToText;

const { email, password } = require("./config");

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: password
  }
});

mailTransport.use("compile", htmlToText());

const APP_NAME = "Woop Code";

exports.sendUserEmail = functions.database
  .ref("/orders/{pushId}")
  .onCreate(order => {
    sendOrderEmail(order.val());
  });

function sendOrderEmail(order) {
  console.log(order);
  const mailOptions = {
    from: `${APP_NAME} <sorin.chis06@gmail.com.com`,
    to: order.email,
    subject: `Your order from ${APP_NAME}.`,
    html: `
      <table style="width:500px; margin: auto"> 
        <tr>
            <th>${order.displayName}</th>
            <th>You ordered some food, here's confirmation of that order. </th>
        </tr>
       
      </table>
    `
  };
  return mailTransport
    .sendMail(mailOptions)
    .then(info => {
      console.log("Email Sent: ", +info.response);
    })
    .catch(error => {
      console.log("Error sending email: ", error);
    });
}
