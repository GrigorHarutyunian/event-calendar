import { checkUser } from "../firebase/service/checkUser";
import { userIsLogin } from "../redux/slices/userIsLoginSlice";
import { currentUser } from "../redux/slices/userDataSlice";
import { generateUserId } from "../utils/generateUserIdWithEmail";
export function onSubmitHandlerForLogin(
  email,
  password,
  isNotValidEmail,
  isNotValidPassword,
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

    try {
      if (!isNotValidEmail && !isNotValidPassword && password && email) {
        const { success, user, message } = await checkUser(data);

        if (success) {
          // add get local
          dispatch(userIsLogin());
          dispatch(currentUser(user.description));
          navigate("/home");
        } else {
          console.log(message);
        }
      } else {
        alert("not send");
      }
    } catch (error) {
      console.error("Error in onSubmitHandlerForLogin:", error);
    }
  };
}
