export function onSubmitHandlerForLogin(
  email,
  password,
  isNotValidEmail,
  isNotValidPassword
) {
  return function onSubmitHandler(e) {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    if (!isNotValidEmail && !isNotValidPassword) {
      // here should be function to send data object to the database or server just
      alert("Send");
    } else {
      alert("not send");
    }
  };
}
