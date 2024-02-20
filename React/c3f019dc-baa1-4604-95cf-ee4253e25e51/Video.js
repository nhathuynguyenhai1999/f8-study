import { useContext } from "react";

import { useRef } from "react";
import "./Content.css";
import { themeContext } from "./App";
function Video() {
  const theme = useContext(themeContext);

  return (
    <div>
      {/* <video src={video1} width={280} /> */}
      <h2 className={theme}>
        👉 Xin mời tham gia tại đây:
        https://www.facebook.com/groups/1134618593772787
      </h2>
    </div>
  );
}
export default Video;
