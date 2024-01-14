export function sendEmail(mail, body) {
  window.Email.send({
    SecureToken: "30b05671-a059-4bc3-b3bb-8cb49321cb2a",
    To: mail,
    From: "2003.karen.shmavonyan@gmail.com",
    Subject: "This is the subject",
    Body: body,
  }).then((message) => alert(message));
}
