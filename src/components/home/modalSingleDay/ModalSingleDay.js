import "./ModalSingleDay.css";
import { useDispatch } from "react-redux";
import { changeState } from "../../../redux/slices/modalSingleDaySlice";
export const ModalSingleDay = () => {
  const dispatch = useDispatch();
  return (
    <div onClick={() => dispatch(changeState())} className="modal">
      <div onClick={(e) => e.stopPropagation()} className="modal-content"></div>
    </div>
  );
};
