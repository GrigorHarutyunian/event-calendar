import { useState } from "react";
import "./BurgerMenu.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeBurgerState } from "../../../redux/slices/burgerSlice";

export const BurgerMenu = () => {
  const dispatch = useDispatch();
  const burgerState = useSelector((state) => state.burger);
  const [burgerClass, setBurgerClass] = useState("burger-unclicked");
  const [menuClass, setMenuClass] = useState("menu-hidden");
  const userData = useSelector((state) => {
    return state.userData;
  });
  console.log(userData);

  const updateManu = () => {
    if (!burgerState) {
      console.log(burgerState);
      setBurgerClass("burger-clicked");
      setMenuClass("burger-menu");
      dispatch(changeBurgerState(true));
    } else {
      console.log(burgerState);
      setBurgerClass("burger-unclicked");
      setMenuClass("menu-hidden");
      dispatch(changeBurgerState(false));
    }
  };

  return (
    <>
      <div className={menuClass}>
        <div className="userData">
          {burgerState && userData && (
            <div>
              <span className="user-image">
                <img src={userData.image} alt="user image" />
              </span>
              <span className="user-email"> {userData.email}</span>
            </div>
          )}
        </div>
      </div>
      <div className="cursor-div" onClick={() => updateManu()}>
        <div className={burgerClass}></div>
        <div className={burgerClass}></div>
        <div className={burgerClass}></div>
      </div>
    </>
  );
};
