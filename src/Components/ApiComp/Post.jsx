import React from 'react'

const Post = (props) => {
    return (
        <div className="post">
            <div className="img-thumb">
                <img src="https://placeimg.com/200/150/nature" alt="nature"/>
            </div>
            <div className="content">
                {/* <p className="title">{props.title}</p> */}
                {/* <p className="desc">{props.desc}</p> */}
                {/* <button className="remove" onClick={props.onClick}>Remove</button> */}

                <p className="title">{props.data.title}</p>
                <p className="desc">{props.data.body}</p>
                <button className="remove" onClick={() => props.remove(props.data.id)}>Remove</button>
            </div>
        </div>
    )
}

export default Post;