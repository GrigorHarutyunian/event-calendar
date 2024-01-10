export function onClickHandlerForPasswordFunction(
  setPassword,
  validatePass,
  setIsNotValidPassword
) {
  return function onClickHandlerForPassword(e) {
    e.preventDefault();

    setPassword(e.target.value);
    if (validatePass(e.target.value)) {
      setIsNotValidPassword(false);
    } else {
      setIsNotValidPassword(true);
    }
  };
}
