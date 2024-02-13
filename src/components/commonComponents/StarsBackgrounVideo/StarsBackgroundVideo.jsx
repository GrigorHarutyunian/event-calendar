import "./StarsBackgroundVideo.css";
import { stars } from "../../../assets";

export default function StarsBackgroundVideo() {
  return (
    <div>
      <video
        className="stars-video"
        src={stars}
        type="video/mp4"
        controls={false}
        loop
        muted
        autoPlay
      />
    </div>
  );
}
