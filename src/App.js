import React from 'react';
import CardList from './CardList';
import SearchBox from './searchBox';
import Scroll from './Scroll';
import './App.css';


class App extends React.Component{
    constructor () {
        super()
        this.state = {
            robots : [],
            searchfieald : ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> {
            return response.json();
        })
        .then(users=> {
            this.setState({robots : users})
        })
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
                <h1 className ='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );
    }
}

export default App;