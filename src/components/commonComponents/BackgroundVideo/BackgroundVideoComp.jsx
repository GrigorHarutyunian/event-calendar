import "./BackgroundVideoComp.css";
import { Login } from "../../../assets";

export default function BackgroundVideoComp() {
  return (
    <div>
      <video
        className="video"
        src={Login}
        type="video/mp4"
        controls={false}
        loop
        muted
        autoPlay
      />
    </div>
  );
}
