import React from "react";
import numberImg from "../Resources/Group7.png";
import needleImg from "../Resources/Group4.png";
import "./SpeedometerWidget.css";

class SpeedometerWidget extends React.Component {
  render() {
    return (
      <div>
        <img className="NumberImage" src={numberImg}  alt="Number"/>
        <img className="NeedleImage" src={needleImg}  alt="Needle"/>
      </div>
    );
  }
}

export default SpeedometerWidget;
