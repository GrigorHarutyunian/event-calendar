import "./BurgerMenu.css";

export const UserInfo = ({ userData }) => {
  return (
    <div className="userData">
      <img className="user-img" src={userData.image} alt="Firebase Image" />
      <p className="user-email">{userData.email}</p>
    </div>
  );
};
