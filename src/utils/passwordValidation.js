export function validatePass(password) {
  if (password.length >= 8) {
    return true;
  }
  return false;
}

export default validatePass;
