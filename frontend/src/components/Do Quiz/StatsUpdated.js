import React from 'react';
import HomeButton from "../Sign Up/returnToHomePage";

class StatsUpdated extends React.Component {
    render() {
        return (<div className="statsUpdated">
            (
            <div className="stats-updated-text">
                    <h2>Stats Updated!</h2>
                </div>
                <div className="stats-updated-home">
                    <HomeButton/>
                </div>
            )
        </div>)
    }
}