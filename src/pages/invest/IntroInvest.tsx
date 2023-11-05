import React from "react";
import "../../styles/introInvest.css";
import NavBar from "../../components/NavBar";

// This component displays the navigation bar and introduction to the Invest page
const IntroInvest: React.FC<{}> = () => {
  return (
    <div className="intro-invest">
      <NavBar />
      <div className="intro-invest-content">
        <h3>Trade, not aid</h3>
        <h1>Southern innovations addressing global problems</h1>
      </div>
    </div>
  );
};

export default IntroInvest;
