import React, { Component, Fragment  } from 'react'
import Post from './Post'
import './BlogPost.css'
import axios from 'axios'
export default class BlogPost extends Component {

    state = {
        post: []
    }


    getPostAPI = () => {
        axios.get('http://localhost:3004/posts')
            .then((res) => {
                console.log(res.data)
                this.setState({
                    post: res.data
                })
            })
    }


    //handler untuk remove
    handleRemove = (data) => {
        //yang muncul adalah id nya
        console.log(data);
        axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
            console.log(res);
            this.getPostAPI();
        })
    }


    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             post: json
        //         })
        //     })

        // axios.get('https://jsonplaceholder.typicode.com/posts')
        // axios.get('http://localhost:3004/posts')
        //     .then((res) => {
        //         console.log(res.data)
        //         this.setState({
        //             post: res.data
        //         })
        //     })
        this.getPostAPI();

    }



    render() {
        return (
            <Fragment>
                <p className="section-title">Blog Post</p>
                {/* <Post title="judulnya" desc="Deskripsi Judul" /> */}
                {
                    this.state.post.map(post => {
                        // return <Post key={post.id} title={post.title} desc={post.body} remove={this.handleRemove} />
                        return <Post key={post.id} data={post} remove={this.handleRemove} />
                    })
                }
            </Fragment>
        )
    }
}
