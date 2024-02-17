import { useEffect, useState } from "react";
import "./BurgerMenu.css";
import { UserInfo } from "./UserInfo";
import { useDispatch } from "react-redux";
import { changeBurgerState } from "../../../redux/slices/burgerSlice";
import { useSelector } from "react-redux";
import { modalInvitations } from "../../../redux/slices/modalInvitationsSlice";
import { EventInivations } from "../../../firebase/service/EventInvitations";

export const BurgerMenu = () => {
  const dispatch = useDispatch();
  const burgerState = useSelector((state) => state.burger);
  const [burgerClass, setBurgerClass] = useState("burger-unclicked");
  const [menuClass, setMenuClass] = useState("menu-hidden");
  const userData = useSelector((state) => {
    return state.userData;
  });
  const userID = useSelector((store) => store.user);

  const updateManu = () => {
    if (!burgerState) {
      setBurgerClass("burger-clicked");
      setMenuClass("burger-menu");
      dispatch(changeBurgerState(true));
    } else {
      setBurgerClass("burger-unclicked");
      setMenuClass("menu-hidden");
      dispatch(changeBurgerState(false));
    }
  };

  useEffect(() => {
    burgerState && updateManu();
  }, []);

  return (
    <>
      <div className={menuClass}>
        {burgerState && (
          <>
            <UserInfo userData={userData} />
            <div
              onClick={async () => {
                await EventInivations(userID, dispatch);
                dispatch(modalInvitations(true));
              }}
              className="invitations"
            >
              All Events
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
