import React, { Component } from 'react'

import Header from './Header'
import Footer from './Footer'
import Content from './Content'

// an async request
const data = require('./data.json')
const fetchEvents = () => Promise.resolve(data)
                        .then(json => json.slice(0,4))


class Container extends Component {
    constructor(props) {
        super(props);
        this.state = { refreshing: false }
    }

    // bound to the refresh button
    refresh() {
        this.setState({refreshing: true})
    }

    //  callback from the content component
    onComponentRefresh() {
        this.setState({refreshing: false});
    }

    render() {

        const {refreshing} = this.state;

        return (
            <div className='notificationsFrame'>
                <div className='panel'>
                    <Header title="Github activity"></Header>
                    <Content 
                        onComponentRefresh={this.onComponentRefresh.bind(this)}
                        requestRefresh={refreshing}
                        fetchData={fetchEvents} />
                </div>
            </div>
        )
    }
}

export default Container;