import React from "react";
import { useState } from "react";
import ControlPanel from "./ControlPanel";
import Clock from "./Clock";

export default function LandingPage() {
  const [sessionVal, setSessionVal] = useState(25);
  const [breakVal, setBreakVal] = useState(5);

  return (
    <div className="landing-container">
      <h1>Pomodore Timer</h1>
      <Clock state={{ sessionVal }} actions={{ setSessionVal }} />
      <ControlPanel
        state={{ sessionVal, breakVal }}
        actions={{ setSessionVal, setBreakVal }}
      />
    </div>
  );
}
