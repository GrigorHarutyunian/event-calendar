export function onSubmitHandlerForRegistration(
  email,
  password,
  image,
  isNotValidEmail,
  isNotValidPassword
) {
  return function onSubmitHandler(e) {
    e.preventDefault();
    const data = {
      email,
      password,
      image,
    };

    if (!isNotValidEmail && !isNotValidPassword && password && email && image) {
      // here should be function to send data object to the database or server just
      console.log(data);
      alert("Registrated");
    } else {
      alert("not registrated");
    }
  };
}
