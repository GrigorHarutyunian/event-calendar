import jwt_decode from "jwt-decode";
import { addUser } from "../firebase/service/addUser";
import { currentUser } from "../redux/slices/userDataSlice";
import { getUser } from "../firebase/service/GetUser";
import { userIsLogin } from "../redux/slices/userIsLoginSlice";
import { generateUserId } from "./generateUserIdWithEmail";
import { sendEmail } from "./sendEmail";
export function responsGoogleFunction(navigate, dispatch) {
  return async function responsGoogle(response) {
    let decodedHeader = jwt_decode(response.credential);
    const { email, sub, name, picture } = decodedHeader;
    console.log(decodedHeader);
    const doc = {
      id: generateUserId(email),
      email,
      image: picture,
    };
    const body = `
      <b> Dear </b> ${name}
      <br />
      <b>We are thrilled to welcome you to our website 🌟</b>
      <br />
      <b>Get ready for an incredible experience filled with engaging sessions, networking opportunities, and memorable moments.</b>
      <br />
      <b>Feel free to explore and make the most out of your participation! </b>
      <br />
      <b> See you at your events!</b>
      <br />
      <b> Best regards </b>
      <br />
      <b> Calendar website Team </b>
    `;
    try {
      const a = await getUser(doc.id);
      if (a) {
        dispatch(userIsLogin());
        sendEmail(email, body);
        dispatch(currentUser(a.description));
      } else {
        addUser(doc);
        sendEmail(email, body);
        dispatch(userIsLogin());
        dispatch(currentUser(doc));
      }
      navigate("/home");
    } catch (er) {
      console.log(er);
    }
  };
}
