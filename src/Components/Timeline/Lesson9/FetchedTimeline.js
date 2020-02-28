import React, { Component } from 'react'
import ActivityItem from './GithubActivityItem'

const data = require('./data.json')



class FetchedTimeline extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false, //set loading to false
            activities: []
        };
    }


    // update the data when the component mounts
    componentDidMount() {
        this.updateData();
    }

    componentWillReceiveProps(nextProps) {
        //check to see if the request refresh prop has changed
        if (nextProps.requestRefresh === true) {
            this.setState({loading: true}, this.updateData);
        }
    }


    //call out to github data and refresh directory
    updateData() {
        this.setState(
            {
                loading: false,
                activities: data.slice(0,4)
            },
            this.props.onComponentRefresh
        );
    }



    render() {
        const {loading, activities} = this.state;

        return (
            <div className="content">
                <div className="line"></div>
                {loading && <div>Loading</div>}
                {/* time line item */}
                {activities.map(activity => (
                    <ActivityItem key = {activity.id} activity={activity} />
                ))}
            </div>
        );
    }
}

export default FetchedTimeline