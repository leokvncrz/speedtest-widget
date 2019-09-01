import React from 'react';
import startImg from '../Resources/Group8.png';
import "./StartButtonWidget.css";

class StartButtonWidget extends React.Component{
    render(){
        return <div className="StartButton">
            <img className="StartButtonImage" src={startImg} alt="Start"/>
        </div>
    }
}

export default StartButtonWidget;