import React from 'react';
import '../../styles/aboutIntroduction.css'; 
import NavBar from '../../components/NavBar';

// This component displays the navigation bar and the introduction section
const Introduction: React.FC<{}> = () => {
  return (
    <div className="introduction">
        <NavBar />
        <div className="introduction-content">
            <h2>HOW TO RECOGNIZE AN ELEWA MEMBER</h2>
            <p>Dependable, Creative, Supportive, Open Minded and Fun*</p>
            <h3>*SERIOUS WHEN IT MATTERS</h3>
        </div>
    </div>
  )
}

export default Introduction