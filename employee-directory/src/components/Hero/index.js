import React from "react";
import "./style.css";

function Hero(props) {
  return (
    <div className="hero text-center" style={{backgroundColor: "darkblue" }}>
      {props.children}
    </div>
  );
}

export default Hero;
