import { gmailRegistrationBody } from "../data/constants";
import { addUser } from "../firebase/service/addUser";
import { sendEmail } from "../utils";
import { generateUserId } from "../utils/generateUserIdWithEmail";
export function onSubmitHandlerForRegistration(
  email,
  password,
  birthday,
  image,
  isNotValidEmail,
  isNotValidPassword,
  isNotValidBirthday,
  setinValideDate,
  setUserExistWithEmail,
  navigate
) {
  const body = gmailRegistrationBody(email);

  return function onSubmitHandler(e) {
    e.preventDefault();

    const data = {
      email,
      id: generateUserId(email),
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
      // here should be checked does exist user with this email if not create user and call setUserExistWithEmail(false) if yes call setUserExistWithEmail(true)
      addUser(data);
      setinValideDate(false);
      sendEmail(email, body);
      navigate("/login");
    } else {
      setinValideDate(true);
    }
  };
}
