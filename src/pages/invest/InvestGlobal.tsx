import React from "react";
import "../../styles/investGlobal.css";

// This component displays the section after the introduction section of the Invest page upto the key figures
const InvestGlobal: React.FC<{}> = () => {
  return (
    <div className="global-section">
      <div className="global-container">
        <div className="global-content">
          <h2>How we see it differently</h2>
          <p>
            The global South is rapidly catching up with the "developed" world.
            It's time for you to get to know the rapid development, innovation
            and drive going on in this part of the world (East-Africa, South
            Asia and beyond).
          </p>
        </div>
        <div className="global-cont">
          <img
            src="https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,w_1280/v1675690306/elewa-group-website/Images/Mask_Group_17_rjkgrq.png"
            className="global-image"
            alt="global-image"
          />
          <h2>Key figures</h2>
          <div className="global-figures">
            <div className="global-figure">
              <div className="global-figure-content">
                <h1>
                  1.3 <span>M</span>
                </h1>
                <h3>
                  Approx. number of Kenyan talents reaching the age of 18 in
                  2022
                </h3>
              </div>
            </div>
            <div className="global-figure">
              <div className="global-figure-content">
                <h1>
                  5 <span>M</span>
                </h1>
                <h3>
                  number of East-Africans(EAC) reaching the age of 18 in 2022
                </h3>
              </div>
            </div>
            <div className="global-figure">
              <div className="global-figure-content">
                <h1>2022</h1>
                <h3>
                  Democratic Republic of Congo joins the East African Community
                </h3>
              </div>
            </div>
            <div className="global-figure">
              <div className="global-figure-content">
                <h1>
                  7.5 <span>M</span>
                </h1>
                <h3>
                  The number of unfilled IT vacancies in the US and EU markets
                </h3>
              </div>
            </div>
            <div className="global-figure">
              <div className="global-figure-content">
                <h1>
                  10 <span>M</span>
                </h1>
                <h3>Number of technical vacancies by 2030</h3>
              </div>
            </div>
            <div className="global-figure">
              <div className="global-figure-content">
                <h1>2050</h1>
                <h3>Africa holds the worlds largest workforce</h3>
              </div>
            </div>
            <div className="global-figure">
              <div className="global-figure-content">
                <h1>
                  $4.6 <span>M</span>
                </h1>
                <h3>Startup funding raised by African startups in 2022</h3>
              </div>
            </div>
            <div className="global-figure">
              <div className="global-figure-content">
                <h1>
                  310 <span>%</span>
                </h1>
                <h3>
                  Increase in startup funding for companies with HQ in Kenya
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestGlobal;
