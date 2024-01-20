export function onClickHandlerForPasswordFunction(
  setPassword,
  validatePass,
  setShowPasswordValid,
  setLengthValidated,
  setLowerValidated,
  setNumberValidated,
  setSpecialValidated,
  setUpperValidated,
  setIsNotValidPassword
) {
  return function onClickHandlerForPassword(e) {
    e.preventDefault();
    const value = e.target.value;
    setPassword(value);
    if (
      validatePass(
        value,
        setLengthValidated,
        setLowerValidated,
        setNumberValidated,
        setSpecialValidated,
        setUpperValidated
      )
    ) {
      setShowPasswordValid(false);
      setIsNotValidPassword(false);
    } else {
      setShowPasswordValid(true);
      setIsNotValidPassword(true);
    }
  };
}
