import { checkUser } from "../firebase/service/checkUser";
import { userIsLogin } from "../redux/slices/userIsLoginSlice";
import { currentUser } from "../redux/slices/userDataSlice";
import { generateUserId } from "../utils/generateUserIdWithEmail";
import { gmailRegistrationBody } from "../data/constants";
export function onSubmitHandlerForLogin(
  email,
  password,
  isNotValidEmail,
  isNotValidPassword,
  setInValidDateShow,
  setDoesUserExist,
  navigate,
  dispatch
) {
  const regex = /[.$[\]#]/g;
  return async function onSubmitHandler(e) {
    e.preventDefault();
    const data = {
      id: generateUserId(email),
      email,
      password,
    };
    const body = gmailRegistrationBody(email);
    try {
      if (!isNotValidEmail && !isNotValidPassword && password && email) {
        const { success, user, message } = await checkUser(data);

        if (success) {
          dispatch(userIsLogin());
          dispatch(currentUser(user.description));
          setInValidDateShow(false);
          setDoesUserExist(false);
          navigate("/home");
        } else {
          console.log(message);
          setInValidDateShow(false);
          setDoesUserExist(true);
        }
      } else {
        setDoesUserExist(false);
        setInValidDateShow(true);
      }
    } catch (error) {
      console.error("Error in onSubmitHandlerForLogin:", error);
    }
  };
}
