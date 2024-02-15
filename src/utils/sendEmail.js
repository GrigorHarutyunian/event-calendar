import { toast } from "react-hot-toast";

export function sendEmail(email, body) {
  window.Email.send({
    SecureToken: "30b05671-a059-4bc3-b3bb-8cb49321cb2a",
    To: email,
    From: "2003.karen.shmavonyan@gmail.com",
    Subject: "This is the subject",
    Body: body,

  }).then((message) => {
    if (message === "Failure sending mail.") {
      toast.error(`Oops! Message delivery failed`);
    } else {
      toast.success(`Message sent successfully! `);
    }
  });

}
