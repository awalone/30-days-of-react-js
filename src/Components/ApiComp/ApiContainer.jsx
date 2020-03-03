import React, { Component, Fragment } from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'

import Timer from '../Timeline/Lesson6/Timer'
import BlogPost from './BlogPost'
import Timeline from '../Timeline/Lesson9/Container'

// style
import './ApiContainer.css'
import DetailPost from './DetailPost'

export default class ApiContainer extends Component {
    render() {
        return (

            <BrowserRouter>

               
            <Fragment>
                <div className="navigation">
                    <Link to="/">Timer</Link>
                    <Link to="/blog">Blog Posts</Link>
                    <Link to="/timeline">News Feed</Link>
                </div>
                <Route path="/" exact component={Timer} />
                <Route path="/blog" component={BlogPost} />
                <Route path="/detail-post/:postId" component={DetailPost} />
                <Route path="/timeline" component={Timeline} />
            </Fragment>
            


            </BrowserRouter>


            
        )
    }
}
