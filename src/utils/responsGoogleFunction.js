import jwt_decode from "jwt-decode";

export function responsGoogleFunction(navigate) {
  return function responsGoogle(response) {
    let decodedHeader = jwt_decode(response.credential);
    const { name, sub, picture } = decodedHeader;
    const doc = {
      _id: sub,
      _type: "user",
      userName: name,
      image: picture,
    };

    //here should be function to send the date to the database or just the server to keep it
    localStorage.setItem("user", JSON.stringify(doc));
    localStorage.setItem("loggedIn", true);
    navigate("/home"); // this is an exapmle just, real code shouldn't be working like this
  };
}
