import React from 'react';
import './HomePageLink.css';
import {Link} from "react-router-dom";
import { BuildQuiz} from "./HomePageButton";


class HomePageLink extends React.Component {
    render() {
        return (
            <div className="Link">
                <div className="image-container">
                    <img src={this.props.picture} alt='ai photo'/>
                </div>
                <div className="link">
                <Link to={this.props.link}>{this.props.linktext}</Link>
                </div>
            </div>)
    }
}

export default HomePageLink;