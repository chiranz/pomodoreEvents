import React, { useState } from "react";
import ControlPanel from "./ControlPanel";
import Clock from "./Clock";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export default function LandingPage() {
  const [sessionVal, setSessionVal] = useState(25);
  const [breakVal, setBreakVal] = useState(5);
  const isAuthenticated = useSelector(
    state => state.authReducer.isAuthenticated
  );

  if (isAuthenticated) {
    return <Redirect to="/topics" />;
  }

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
