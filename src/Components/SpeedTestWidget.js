import React from "react";
import SpeedometerWidget from "./SpeedometerWidget";
import StartButtonWidget from "./StartButtonWidget";
import LocationWidget from "./LocationWidget";
import './SpeedTestWidget.css';

class SpeedTestWidget extends React.Component {
  render() {
    return <div className="SpeedTestWidget">
        <div className="SpeedDetails">
          <div className="FlexParent">
            <div className="Download">Download: 100 Mbps</div>
            <div className="Filler"/>
            <div className="Upload">Upload: 100 Mbps</div>
          </div>
          <div className="FlexParent">
            <div className="Ping">
              Ping: 1ms
            </div>
            <div className="Filler"/>
            <div className="Jitter">
              Jitter: 10ms
            </div>
          </div>
        </div>
        <SpeedometerWidget/>
        <StartButtonWidget/>
        <LocationWidget/>
    </div>;
  }
}

export default SpeedTestWidget;
