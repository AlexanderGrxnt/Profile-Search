import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll';

import { setSearchField, requestPeople } from '../Actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchPeople.searchField,
        people: state.requestPeople.people,
        isPending: state.requestPeople.isPending,
        error: state.requestPeople.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestPeople: () => dispatch(requestPeople())
    }
}

class App extends Component {
    // constructor(){
    //     super()
    //     this.state = {
    //         robots: [],
    //         // searchfield: ''
    //     }
    // }

    componentDidMount(){
        this.props.onRequestPeople();
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(users => this.setState({ robots: users}));
    }

    // onSearchChange = (event) => {
    //     this.setState({ searchfield: event.target.value })      
    // }

    render() {
        // const { robots } = this.state;
        const {searchField, onSearchChange, people, isPending } = this.props;

        const filteredPeople = people.filter(people => {
            return people.name.toLowerCase().includes(searchField.toLowerCase());
        })

        //  return !robots.length ?
        return isPending ?
            <h1>Loading</h1> :        //if
            (                         //else
                <div className="tc">
                    <h1 className="f1">Search Profiles</h1>
                    <Searchbox searchChange = {onSearchChange} />
                    <Scroll>
                        <Cardlist robots={filteredPeople}/>
                    </Scroll>
                </div>
            );

        

       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);