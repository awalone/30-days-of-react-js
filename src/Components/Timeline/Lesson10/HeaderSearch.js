import React, { Component } from 'react'
import SearchForm from './SearchFormWithSubmit'
class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchVisible: false
        }
    }

    showSearch() {
        this.setState({
            searchVisible: !this.state.searchVisible
        })
    }

    render() {

        //classes to add to the <input /> element
        let searchInputClasses = ["searchInput"];

        //update the class array if the state is visible
        if(this.state.searchVisible) {
            searchInputClasses.push("active");
        }
        return (
            <div>
                
            </div>
        )
    }
}

export default Header;