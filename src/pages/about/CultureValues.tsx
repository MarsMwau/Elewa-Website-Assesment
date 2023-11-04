import React from 'react'
import "../../styles/cultureValues.css";
import { PiSpiralThin } from "react-icons/pi";
import { FiUsers } from "react-icons/fi";
import { TbTriangleInverted } from "react-icons/tb";
import { DiOpenshift } from "react-icons/di";

// This component displays the company's culture and values
const CultureValues: React.FC<{}> = () => {
 // This is the main container for the culture and values section
  return (
    <div className="culture-values">
        <div className="culture-values-container">
            <div className="culture-content">
                <h1>Our Cultures & Values</h1>
                <p>Our culture, CODE-(T), defines us. It protects and guides us to success. It keeps our team and management accountable to itself, its objective, and our long-term mission.</p>
            </div>
            <div className="culture-icons">
            <div className="culture1">
                <span><FiUsers /></span>
                <h2>Cooperative</h2>
                <p>One for all ,all for one! We have a cooperative and open mindset. If one of us grows, all will follow.</p>
            </div>
            <div className="culture2">
                <span><PiSpiralThin /></span>
                <h2>Ownership</h2>
                <p>We are dependable and honour our commitments. When things don't go as planned, as they sometimes do, we communicate early to avoid catastrophe.</p>
            </div>
            <div className="culture3">
                <span><TbTriangleInverted /></span>
                <h2>Detail</h2>
                <p>We are a "Centre of Excellence" as per global standards. We only compete with ourselves, but find in the global standard our only worthy rival.</p>
            </div>
            <div className="culture4">
                <span><FiUsers /></span>
                <h2>Empathy</h2>
                <p>We are nothing without people, and people have different contexts and needs. Our organization acts as a safe haven and shield for those in need.</p>
            </div>
            </div>
            <div className="culture5-icon">
                <div className="culture5-content">
                <span><DiOpenshift /></span>
                <h2>Transparency</h2>
                <p>Transparency, an open mind, and an open heart hold our organization together. We commit to and promote full transparency to ourselves, our stakeholders, and our beneficiaries. We furthermore invest heavily in open-source and open-data projects, as true potential lies everywhere. Not just within.</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default CultureValues