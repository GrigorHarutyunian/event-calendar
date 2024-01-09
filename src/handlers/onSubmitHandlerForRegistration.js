export function onSubmitHandlerForRegistration(
  email,
  password,
  birthday,
  image,
  isNotValidEmail,
  isNotValidPassword,
  isNotValidBirthday
) {
  return function onSubmitHandler(e) {
    e.preventDefault();
    const data = {
      email,
      password,
      birthday,
      image,
    };

    if (
      !isNotValidEmail &&
      !isNotValidPassword &&
      !isNotValidBirthday &&
      password &&
      email &&
      image &&
      birthday
    ) {
      // here should be function to send data object to the database or server just
      console.log(data);
      alert("Registrated");
    } else {
      alert("not registrated");
    }
  };
}
