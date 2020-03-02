import React, { Component } from 'react'
import LifeCycleComp from './LifeCycleComp'
export default class ContainerLifeCycle extends Component {

    state = {
        showComponent: true
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         showComponent: false
        //     })
        // }, 5000)
    }

    render() {
        return (
            <div>
                <p>LifeCycleComp</p>
                <hr />
                {
                    this.state.showComponent
                    ?
                    <LifeCycleComp />
                    : null
                }
                
            </div>
        )
    }
}
