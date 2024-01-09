export function onClickHandlerForEmailFunction(
  setEmail,
  validateEmail,
  setIsNotValidEmail
) {
  return function onClickHandlerForEmail(e) {
    e.preventDefault();

    setEmail(e.target.value);

    if (validateEmail(e.target.value)) {
      setIsNotValidEmail(false);
    } else {
      setIsNotValidEmail(true);
    }
  };
}
