import React from 'react';
import CardList from './CardList';
import SearchBox from './searchBox';
import { robots } from './robots';


class App extends React.Component{
    constructor () {
        super()
        this.state = {
            robots : robots,
            searchfieald : ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfieald : event.target.value})
        
       
    }
    render () {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfieald.toLowerCase())
        });
        return (
            <div class ='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>
        );
    }
}

export default App;