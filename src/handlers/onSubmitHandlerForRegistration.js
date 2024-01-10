export function onSubmitHandlerForRegistration(
  email,
  password,
  birthday,
  image,
  isNotValidEmail,
  isNotValidPassword,
  isNotValidBirthday,
  navigate
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
      // here should be function to send data object to the database or just the server
      console.log(data);
      alert("Registrated");
      navigate("/login");
    } else {
      console.log(data);
      alert("not registrated");
    }
  };
}
