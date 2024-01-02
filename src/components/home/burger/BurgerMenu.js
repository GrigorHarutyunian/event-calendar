import { useState } from "react";
import "./BurgerMenu.css";
import { useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { changeBurgerState } from "../../../redux/slices/burgerSlice";
export const BurgerMenu = () => {
  const dispatch = useDispatch();
  const burgerState = useSelector((state) => state.burger);
  const [burgerClass, setBurgerClass] = useState("burger-unclicked");
  const [menuClass, setMenuClass] = useState("menu-hidden");

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
    <div className={menuClass}>
      <div onClick={() => updateManu()} className={burgerClass}></div>
      <div onClick={() => updateManu()} className={burgerClass}></div>
      <div onClick={() => updateManu()} className={burgerClass}></div>
    </div>
  );
};
