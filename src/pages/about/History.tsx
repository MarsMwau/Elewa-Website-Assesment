import React, { useState } from "react";
import "../../styles/history.css";
import historydetails from "./historydetails.json";
import { FaCircle } from "react-icons/fa";
import { BsArrowRightCircle } from "react-icons/bs";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

const History: React.FC<{}> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextAchievement = () => {
    setCurrentIndex((prev) => (prev === historydetails.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="history-section">
      <div className="history-container">
      <h1>Our history</h1>
      <div className="timeline-container">
        <VerticalTimeline>
          {historydetails.map((achievement, index) => (
            <VerticalTimelineElement
              key={index}
              icon={<FaCircle />}
              className="timeline-content"
            >
              <div className="year">
              <h3>{achievement.year}</h3>
            </div>
            <div className="event">
              <h2>{achievement.event}</h2>
            </div>
            <div className="description">
              <p>{achievement.description}</p>
            </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      <span onClick={nextAchievement}><BsArrowRightCircle /></span>
      </div>
    </div>
  )
}

export default History;