import React from "react";
import "./clickerButton.style.css";
export default function ClickerButton({ handleClick, children, style }) {
  return (
    <button className="clicker-button" style={style} onClick={handleClick}>
      {children}
    </button>
  );
}
