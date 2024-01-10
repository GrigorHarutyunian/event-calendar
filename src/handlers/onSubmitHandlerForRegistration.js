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
      console.log(data); // this is an exapmle just, real code shouldn't be working like this
      alert("Registrated"); // this is an exapmle just, real code shouldn't be working like this
      navigate("/login"); // this is an exapmle just, real code shouldn't be working like this
    } else {
      console.log(data); // this is an exapmle just, real code shouldn't be working like this
      alert("not registrated"); // this is an exapmle just, real code shouldn't be working like this
    }
  };
}
