import React from 'react';
import './BuildQuizList.css';
import triviaphoto from './istockphoto-973102672-170667a.jpg'
import { Link } from 'react-router-dom';

class BuildQuizLink extends React.Component {
    render() {
        return (
            <div className="Game">
                <div className="image-container">
                    <img src={triviaphoto} alt='ai photo'/>
                </div>
                <div className="BuildQuiz">
                    <Link to='/buildQuiz'>Build A Quiz</Link>
                </div>
            </div>)
    }
}

export default BuildQuizLink;