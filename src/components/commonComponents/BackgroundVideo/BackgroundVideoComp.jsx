import Login from "../../../assets/Login.mp4";
import "./BackgroundVideoComp.css";

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
