import React from "react";
import numberImg from "../Resources/Group7.png";
import needleImg from "../Resources/Group4.png";
import "./SpeedometerWidget.css";

class SpeedometerWidget extends React.Component {
  render() {
    return (
      <div className="Speedometer">
        <img className="NumberImage" src={numberImg} alt="Number"/>
        <div className="ScoreDetails">
          <div className="ScoreTag">Score</div>
          <div className="ScoreData">GOOD</div>
        </div>
        <img className="NeedleImage" src={needleImg} alt="Needle"/>
        <div className="SpeedDetails">
          <div className="Speed">
           100 Mbps
          </div>
          <div className="Type">
           Download 
          </div>
        </div>
      </div>
    );
  }
}

export default SpeedometerWidget;
