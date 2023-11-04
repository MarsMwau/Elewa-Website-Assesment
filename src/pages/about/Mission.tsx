import React from "react";
import "../../styles/mission.css";
import { BsInfinity } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";

// This component displays the mission section
const Mission: React.FC<{}> = () => {
  return (
    <div className="mission-container">
      <div className="mission-content">
        <h1>We Care!</h1>
        <div className="mission-statements">
          <p className="first-statement">
            Elewa is a mission-driven organization. We make use of our
            cooperative and shared culture to drive the needle for the
            development of people and environment. We care about our growth, but
            also care deeply about the context surrounding us.
          </p>
          <p className="second-statement">
            Our investments are therefore not limited to internal ones, but
            contribute heavily to our community and environment. From training
            the next scout leaders on sustainable practices, to bridging the
            employment gap for junior software developers.
          </p>
        </div>
        <div className="mission-icons">
            <div className="icon1">
                <span><BsInfinity /> </span>
                <h2>Holistic solutions</h2>
                <p>We go beyond a simple patch-up but develop lasting solutions through holistic design.</p>
            </div>
            <div className="icon2">
                <span><FiUsers /></span>
                <h2>Impact</h2>
                <p>Impact as a direct, or indirect, result. All our respective organizations have underlying theories of change.</p>
            </div>
            <div className="icon3">
                <span><TfiWorld /></span>
                <h2>Open data</h2>
                <p>Sharing is caring. We share what we learn. As proof, we've open-sourced all our internal projects.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;