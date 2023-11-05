import React from 'react';
import "../../styles/social-css/socialBusiness.css";

// Displays the from the section under the introduction
const SocialBusiness: React.FC<{}> = () => {
  return (
    <div className="bussiness-section">
        <div className="bussiness-container">
            <div className="bussiness-stats">
                <div className="stat1">
                    <h1>733+</h1>
                    <h3>People trained</h3>
                </div>
                <div className="stat2">
                    <h1>733k</h1>
                    <h3>careers launched</h3>
                </div>
                <div className="stat3">
                    <h1>200+</h1>
                    <h3>Projects finished</h3>
                </div>
                <div className="stat4">
                    <h1>56</h1>
                    <h3>Investors</h3>
                </div>
            </div>
            <div className="bussiness-content">
                <div className="bussiness-img">
                <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1681306013/lady-impact_rnc9jy.jpg" alt="" />
                </div>
                <div className="bussiness-text">
                    <h1>(Social) business for the win</h1>
                    <p>With a young dynamic population that is eager to contribute to the global economy, East Africa has a lot to offer to the world. Now is the time to nurture sustainable, inclusive and scalable business. The rest will take care of itself.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SocialBusiness