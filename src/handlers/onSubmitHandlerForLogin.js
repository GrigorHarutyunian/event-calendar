export function onSubmitHandlerForLogin(
  email,
  password,
  isNotValidEmail,
  isNotValidPassword,
  navigate
) {
  return function onSubmitHandler(e) {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    if (!isNotValidEmail && !isNotValidPassword && password && email) {
      alert("Send"); // this is an exapmle just, real code shouldn't be working like this
      // here should be function to send data object to the database or server just in order to check it and then if there is a accaunt redirect Home page else login page again
      localStorage.setItem("loggedIn", true);
      navigate("/home"); // this is an exapmle just, real code shouldn't be working like this
    } else {
      alert("not send"); // this is an exapmle just, real code shouldn't be working like this
    }
  };
}
