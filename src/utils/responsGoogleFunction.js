import jwt_decode from "jwt-decode";
import { addUser } from "../firebase/service/addUser";
import { currentUser } from "../redux/slices/userDataSlice";
import { getUser } from "../firebase/service/GetUser";
import { userIsLogin } from "../redux/slices/userIsLoginSlice";
import { generateUserId } from "./generateUserIdWithEmail";
import { sendEmail } from "./sendEmail";
import { gmailRegistrationBody } from "../data/constants";
export function responsGoogleFunction(navigate, dispatch, setDoesExistGmail) {
  return async function responsGoogle(response) {
    let decodedHeader = jwt_decode(response.credential);
    const { email, sub, name, picture } = decodedHeader;
    const doc = {
      id: generateUserId(email),
      email,
      name,
      image: picture,
    };
    const body = gmailRegistrationBody(email);
    try {
      const a = await getUser(doc.id);
      if (a) {
        dispatch(userIsLogin());
        dispatch(currentUser(a.description));
        setDoesExistGmail(false);
      } else {
        addUser(doc);
        sendEmail(email, body);
        dispatch(userIsLogin());
        dispatch(currentUser(doc));
        setDoesExistGmail(false);
      }
      navigate("/home");
    } catch (er) {
      setDoesExistGmail(true);
      console.log(er);
    }
  };
}
