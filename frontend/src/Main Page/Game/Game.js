import React from 'react';
import './Game.css';

class Game extends React.Component {
    render() {
        return (
            <div className="Game">
                <div className="image-container">
                    <img src='./istockphoto-973102672-170667a.jpg' alt=''/>
                </div>
                <h2>{this.props.game}</h2>
            </div>)
    }
}

export default Game;