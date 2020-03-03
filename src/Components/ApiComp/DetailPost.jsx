import React, { Component } from 'react'
import Axios from 'axios';
import './DetailPost.css'
export default class DetailPost extends Component {

    state = {
        post: {
            title: '',
            body: ''
        }
    }

    componentDidMount() {
        // console.log('testing');
        console.log(this.props.match.params.postId);
        let id = this.props.match.params.postId;
        Axios.get(`http://localhost:3004/posts/${id}`).then((res) => {
            console.log(res);
            let post = res.data;
            this.setState({
                post: {
                    title:post.title,
                    body: post.body
                }
            })
        }, (err) => {
            console.log(err);
        })
    }

    render() {
        // console.log(this.props);
        return (
            <div>
                <p>Detail Post</p>
                <p className="detail-title">{this.state.post.title}</p>
                <p className="detail-body">{this.state.post.body}</p>
            </div>
        )
    }
}
