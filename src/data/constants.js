import { star, shield, send } from "../assets";

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const days = [];

for (let i = 1; i <= 31; i++) {
  days.push(i);
}
export const years = [];
const data = new Date();
const currentYear = data.getFullYear();
for (let i = currentYear; i > currentYear - 100; i--) {
  years.push(i);
}

export const gmailRegistrationBody = (email) => {
  return `
      <b> Dear </b> ${email}
      <br />
      <b>We are thrilled to welcome you to our website 🌟</b>
      <br />
      <b>Get ready for an incredible experience filled with engaging sessions, networking opportunities, and memorable moments.</b>
      <br />
      <b>Feel free to explore and make the most out of your participation! </b>
      <br />
      <b> See you at your events!</b>
      <br />
      <b> Best regards </b>
      <br />
      <b> Calendar Website Team </b>
    `;
};

export const gmailInviterBody = (email, inviterDate) => {
  const { title, inviterEmail, time, data } = inviterDate;
  return `
      <b> Dear </b> ${email}
      <br />
      <b>I hope this message finds you well. I am delighted to extend a personal invitation to you for. ${title}, an exciting gathering that promises to be both informative and enjoyable.🌟</b>
      <br />
      <b>Event Details:/b>
      <br />
      <b>Date: ${time},/b>
      <br/>
      <b>Time:${data}</b>
      <br />
      <b>Your presence would add tremendous value to our event, and we believe you'll find it a great opportunity for learning and networking.! </b>
      <br />
      <b> If you have any questions or require further information, feel free to reach out!</b>
      <br />
      <b> Best regards </b>
      <br />
      <b>${inviterEmail} </b>`;
};

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Lorem ips",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Lorem ip",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Lorem ip",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];
