import React, { Component } from 'react'

class Roast extends Component{
    constructor(props){
        super(props);
        this.state = {
            posts : []
        }
    }
    componentDidMount(){
        fetch("http://localhost:8000/api/Post/roast/")
        .then((res)=> res.json())
        .then((data)=> this.setState({posts:data}))
    }
    render(){
        return (
        <div id='post-ul'>
            {this.state.posts.map((post)=>(
                <ul key={post.id} className=' mx-width card border-primary mb-3'>
                    <li id='post-li'>{post.text}</li>
                    <div id='btn-container'>
                        <button id='likes-btn' className='btn btn-outline-success' onClick={() => {this.handleLikes(post.id)}}>
                        {post.likes} Likes
                        </button>
                        <button id='dislikes-btn'className='btn btn-outline-danger' onClick={() => {this.handleDislikes(post.id)}}>
                        {post.dislikes} Dislike
                        </button>
                    </div>
                    <div id='post-footer'>
                        <li className='text-muted'>{post.roast ? 'Roast' : 'Boast'}</li>
                        <li className='text-muted'>Created: {post.create_time.substring(0, 10)}</li>
                    </div>
                </ul>
            ))}
        </div>
        );
    }
    }

export default Roast