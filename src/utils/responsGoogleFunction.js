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

    localStorage.setItem("user", JSON.stringify(doc));
    navigate("/home");
  };
}
