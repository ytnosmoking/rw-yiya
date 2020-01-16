import React from "react";
import "./index.less";
function BottomImage() {
  return (
    <div className="wrapper">
      <img
        style={{ height: "160px", width: "160px", opacity: 0 }}
        src={require("./gzherweima.png")}
        alt=""
      />
    </div>
  );
}
export default BottomImage;
