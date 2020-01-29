import React from "react";
import ClickerButton from "./buttons/ClickerButton";

export default function ControlPanel({
  state: { sessionVal, breakVal },
  actions: { setSessionVal, setBreakVal }
}) {
  const handleReset = () => {
    setSessionVal(25);
    setBreakVal(5);
  };

  return (
    <div className="control-panels">
      <div className="control-panel-left">
        <h6>Session Duration</h6>
        <div className="controls">
          <ClickerButton handleClick={() => setSessionVal(sessionVal + 5)}>
            +
          </ClickerButton>
          <div>{sessionVal} Mins</div>
          <ClickerButton handleClick={() => setSessionVal(sessionVal - 5)}>
            -
          </ClickerButton>
        </div>
      </div>
      <div className="control-panel-middle">
        <ClickerButton
          style={{
            background: "blue",
            borderRadius: "50%",
            height: "75px",
            width: "75px",
            fontWeight: "300",
            fontSize: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
          handleClick={handleReset}
        >
          reset
        </ClickerButton>
      </div>
      <div className="control-panel-right">
        <h6>Break Duration</h6>
        <div className="controls">
          <ClickerButton handleClick={() => setBreakVal(breakVal + 5)}>
            +
          </ClickerButton>
          <div>{breakVal} Mins</div>
          <ClickerButton handleClick={() => setBreakVal(breakVal - 5)}>
            -
          </ClickerButton>
        </div>
      </div>
    </div>
  );
}
