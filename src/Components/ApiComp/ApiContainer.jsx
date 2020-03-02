import React, { Component } from 'react'
import BlogPost from './BlogPost'
export default class ApiContainer extends Component {
    render() {
        return (
            <div>
                <p>Blog Post</p>
                <hr />
                <BlogPost />
            </div>
        )
    }
}
