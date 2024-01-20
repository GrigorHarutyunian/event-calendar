export function onClickHandlerForPasswordFunction(
  setPassword,
  validatePass,
  setShowPasswordValid,
  setIsNotValidPassword
) {
  return function onClickHandlerForPassword(e) {
    e.preventDefault();

    setPassword(e.target.value);
    if (validatePass(e.target.value)) {
      setShowPasswordValid(false);
      setIsNotValidPassword(false);
    } else {
      setShowPasswordValid(false);
      setIsNotValidPassword(true);
    }
  };
}
