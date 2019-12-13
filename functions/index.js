const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const htmlToText = require("nodemailer-html-to-text").htmlToText;
// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require("firebase-admin");
admin.initializeApp();

// const { email, password } = require("./config");
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});

mailTransport.use("compile", htmlToText());

const APP_NAME = "Woop Code";

exports.sendUserEmail = functions.database
  .ref("/orders/{pushId}")
  .onCreate(order => {
    return sendOrderEmail(order.val());
  });

async function sendOrderEmail(order) {
  console.log("@@@@@@@@@@@@@@@@@@@@@@  Inside Firebase Function", order.email);
  console.log("CREDENTALS: ", gmailEmail, gmailPassword);

  const mailOptions = {
    from: `${APP_NAME} <sorin.chis89@gmail.com.com`,
    to: order.email,
    subject: `Your order from ${APP_NAME}.`,
    html: `
    <table style="width:500px; margin: auto"> 
    <tr>
        <th>${order.displayName}</th>
        <th>You ordered some food, here's confirmation of that order. </th>
    </tr>
    ${order.orders
      .map(
        ({ name, quantity, price }) => `
      <tr>
        <td>
          ${quantity}
        </td>            
        <td>
          ${name}
        </td>  
        <td>
          ${price}
        </td>
      </tr>
    `
      )
      .join("")}
  </table>
    `
  };
  await mailTransport.sendMail(mailOptions);
  console.log("New Mail was sent");

  return null;
}
