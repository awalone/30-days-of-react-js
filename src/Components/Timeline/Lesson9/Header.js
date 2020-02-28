import React, { Component } from 'react'
import PropTypes from 'prop-types'
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


        let searchInputClasses = ["searchInput"];

        // update the class array if the state is visible
        if(this.state.searchVisible) {
            searchInputClasses.push("active");
        }

        const wrapperStyle = {
            backgroundColor: 'rgba(251,202,43,1)'
        }

        const titleStyle = {
            color: '#111111'
        }

        const menuColor = {
            backgroundColor: '#111111'
        }


        return (
            <div style={wrapperStyle} className="header">
                <div className="menuIcon">
                    <div className="dashTop" style={menuColor}></div>
                    <div className="dashBottom" style={menuColor}></div>
                    <div className="circle" style={menuColor}></div>
                </div>

        <span className="title" style={titleStyle}>{this.props.title}</span>
                <input type="text" className={searchInputClasses.join(' ')} placeholder="Search ..." />

                <div className="fa fa-search searchIcon" style={titleStyle} onClick={this.showSearch.bind(this)}></div>
            </div>
        )
    }
}


Header.propTypes = {
    title: PropTypes.string
}

export default Header