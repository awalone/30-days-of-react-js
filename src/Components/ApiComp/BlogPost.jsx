import React, { Component, Fragment  } from 'react'
import Post from './Post'
import './BlogPost.css'
import axios from 'axios'
export default class BlogPost extends Component {

    state = {
        post: [],
        formBlogPost : {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isUpdate: false
    }


    getPostAPI = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
            .then((res) => {
                // console.log(res.data)
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

    handleUpdate = (data) => {
        console.log(data);
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
        // axios.put(`http://localhost:3004/posts/${data}`).then((res) => {
        //     console.log(res);
        // })
    }


    //handler untuk form onChange
    handleFormChange = (event) => {
        // console.log('form', event.target)

        let formBlogPostNew = {...this.state.formBlogPost}
        let timestamp = new Date().getTime();
        // console.log(timestamp)
        // console.log('init state : ', this.state.formBlogPost)
        // console.log('new value : ', formBlogPostNew)
        // console.log(event.target.name);
        if(!this.state.isUpdate ) {
            formBlogPostNew['id'] = timestamp;
        }
        
        formBlogPostNew[event.target.name] = event.target.value;
        let title = event.target.value
        this.setState({
            formBlogPost: formBlogPostNew
        }, () => {
            // console.log('value obj formBlog : ', this.state.formBlogPost)
        })
        
    }

    handleSubmit = () => {
        // console.log(this.state.formBlogPost);
        this.postDataToAPI();
        if(this.state.isUpdate) {
            this.putDataToAPI();
        } else {
            this.postDataToAPI();
        }
        
    }


    postDataToAPI = () => {
        axios.post('http://localhost:3004/posts', this.state.formBlogPost).then((res) => {
            console.log(res);
            this.getPostAPI();
        }, (err) => {
            console.log('error: ', err);
        })
    }

    putDataToAPI = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then((res) => {
            console.log(res);
            this.getPostAPI();
        }, (err) => {
            console.log('error: ', err);
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

                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={this.state.formBlogPost.title} placeholder="add title" onChange={this.handleFormChange} />
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" id="body" cols="30" rows="10" onChange={this.handleFormChange} value={this.state.formBlogPost.body}></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div>


                {/* <Post title="judulnya" desc="Deskripsi Judul" /> */}
                {
                    this.state.post.map(post => {
                        // return <Post key={post.id} title={post.title} desc={post.body} remove={this.handleRemove} />
                        return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} />
                    })
                }
            </Fragment>
        )
    }
}
