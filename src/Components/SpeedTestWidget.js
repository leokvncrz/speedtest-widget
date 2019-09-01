import React from "react";
import SpeedometerWidget from "./SpeedometerWidget";
import StartButtonWidget from "./StartButtonWidget";


class SpeedTestWidget extends React.Component {
  render() {
    return <div className="SpeedTestWidget">
        <SpeedometerWidget/>
        <StartButtonWidget/>
    </div>;
  }
}

export default SpeedTestWidget;
