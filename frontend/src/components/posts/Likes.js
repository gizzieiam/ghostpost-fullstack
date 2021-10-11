import React, { Component } from 'react'

class Likes extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            posts : [],
        }
    }

    componentDidMount(){
        fetch("http://localhost:8000/api/Post")
        .then((res)=> res.json())
        .then((data)=> this.setState({posts:data}))
    }

    handleLikes = (id) => {
        console.log(this.state.posts);

        fetch(`http://localhost:8000/api/Post/${id}/likes/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        })
        .then((res) => res.json())
        .then((data) => window.location.reload());
    };

    render (){
        return(
            <>
                <button id='likes-btn' className='btn btn-outline-success' onClick={() => {this.handleLikes(this.props.post_id)}}>
                    {this.state.posts.filter(post => post.id === this.props.post_id).map(post => (
                        <li>
                            {post.likes}
                        </li>
                    ))}
                </button>
            </>
        )
    }
}

export default Likes