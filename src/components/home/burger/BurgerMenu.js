import { useState } from "react";
import "./BurgerMenu.css";
import { UserInfo } from "./UserInfo";
import { useDispatch } from "react-redux";
import { changeBurgerState } from "../../../redux/slices/burgerSlice";
import { useSelector } from "react-redux";
import { Invitation } from "./Inivations";
import { modalInvitations } from "../../../redux/slices/modalInvitationsSlice";

export const BurgerMenu = () => {
  const dispatch = useDispatch();
  const burgerState = useSelector((state) => state.burger);
  const [burgerClass, setBurgerClass] = useState("burger-unclicked");
  const [menuClass, setMenuClass] = useState("menu-hidden");
  const userData = useSelector((state) => {
    return state.userData;
  });
  const invitations = useSelector((store) => store.invitation);

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
        {burgerState && (
          <>
            <UserInfo userData={userData} />
            <div
              onClick={() => dispatch(modalInvitations(true))}
              className="invitations"
            >
              Invitations
            </div>
          </>
        )}
      </div>
      <div className="cursor-div" onClick={() => updateManu()}>
        <div className={burgerClass}></div>
        <div className={burgerClass}></div>
        <div className={burgerClass}></div>
      </div>
    </>
  );
};
