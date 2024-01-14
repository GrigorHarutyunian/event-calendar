import jwt_decode from "jwt-decode";
import { addUser } from "../firebase/service/addUser";
import { currentUser } from "../redux/slices/userDataSlice";
import { getUser } from "../firebase/service/GetUser";
import { userIsLogin } from "../redux/slices/userIsLoginSlice";
import { generateUserId } from "./generateUserIdWithEmail";
export function responsGoogleFunction(navigate, dispatch) {
  return async function responsGoogle(response) {
    let decodedHeader = jwt_decode(response.credential);
    const { email, sub, picture } = decodedHeader;
    console.log(decodedHeader);
    const doc = {
      id: generateUserId(email),
      email,
      image: picture,
    };

    try {
      const a = await getUser(doc.id);
      if (a) {
        dispatch(userIsLogin());
        dispatch(currentUser(a.description));
      } else {
        addUser(doc);
        dispatch(userIsLogin());
        dispatch(currentUser(doc));
      }
      navigate("/home");
    } catch (er) {
      console.log(er);
    }
  };
}
