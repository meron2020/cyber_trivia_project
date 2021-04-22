import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gameName: ''
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleGameNameChange = this.handleGameNameChange.bind(this);
    }

    handleGameNameChange(event) {
        this.setState({gameName: event.target.value});
    }

    handleSearch(event) {
        this.props.searchAPI(this.state.gameName);
        event.preventDefault();
    }

    render() {
        return (
            <div className="SearchBar">
                <div className='SearchBar-fields'>
                    <input placeholder="Search Games" onChange={this.handleGameNameChange}/>
                </div>
                <div className="SearchBar-submit">
                    <a onClick={this.handleSearch}>Search</a>

                </div>
            </div>
        );
    }
}

export default SearchBar;