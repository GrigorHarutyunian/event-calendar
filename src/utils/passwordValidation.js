export function validatePass(
  value,
  setLengthValidated,
  setLowerValidated,
  setNumberValidated,
  setSpecialValidated,
  setUpperValidated
) {
  const lower = new RegExp("(?=.*[a-z])");
  const upper = new RegExp("(?=.*[A-Z])");
  const number = new RegExp("(?=.*[0-9])");
  const special = new RegExp("(?=.*[!@#$%^&*])");
  const length = new RegExp("(?=.{8,})");
  if (lower.test(value)) {
    setLowerValidated(true);
  } else {
    setLowerValidated(false);
  }
  if (upper.test(value)) {
    setUpperValidated(true);
  } else {
    setUpperValidated(false);
  }
  if (number.test(value)) {
    setNumberValidated(true);
  } else {
    setNumberValidated(false);
  }
  if (special.test(value)) {
    setSpecialValidated(true);
  } else {
    setSpecialValidated(false);
  }
  if (length.test(value)) {
    setLengthValidated(true);
  } else {
    setLengthValidated(false);
  }
  if (
    length.test(value) &&
    lower.test(value) &&
    upper.test(value) &&
    special.test(value) &&
    number.test(value)
  ) {
    return true;
  } else {
    return false;
  }
}

export default validatePass;
