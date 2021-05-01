import React from 'react';
import './LinkList.css';
import HomePageLink from '../HomePageLink/HomePageLink';
import deskSetup from '../HomePageLink/desk setup.jpg'
import deskWorkspace from '../HomePageLink/workspace.jpg'


class LinkList extends React.Component {
    render() {
        return (
            <div className="LinksList">
                <HomePageLink linktext="Build a Quiz" link="/buildQuiz" picture={deskSetup}/>
                <HomePageLink linktext="Browse Quizzes" link="/browseQuizzes" picture={deskWorkspace}/>
                <HomePageLink linktext="Stats" link="/stats" picture={deskSetup}/>
            </div>
        )
    }

}

export default LinkList;