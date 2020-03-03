import React, { Component, Fragment } from 'react'

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
            <Fragment>
                <p>Timeline</p>
                <hr />
            <div className='notificationsFrame'>
                <div className='panel'>
                    <Header title="Github activity"/>
                    <Content 
                        onComponentRefresh={this.onComponentRefresh.bind(this)}
                        requestRefresh={refreshing}
                        fetchData={fetchEvents} />

                    <Footer>
                        <button onClick={this.refresh.bind(this)}>
                            <i className="fa fa-refresh" />
                            Refresh
                        </button>
                    </Footer>
                </div>
            </div>
            </Fragment>
        )
    }
}

export default Container;