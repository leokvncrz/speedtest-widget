import React from "react";
import SpeedometerWidget from "./SpeedometerWidget";
import StartButtonWidget from "./StartButtonWidget";
import LocationWidget from "./LocationWidget";


class SpeedTestWidget extends React.Component {
  render() {
    return <div className="SpeedTestWidget">
        <SpeedometerWidget/>
        <StartButtonWidget/>
        <LocationWidget/>
    </div>;
  }
}

export default SpeedTestWidget;
