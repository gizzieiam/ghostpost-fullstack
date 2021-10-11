import React, { Component } from 'react'
import Dislikes from './DisLikes';
import Likes from './Likes';

class AllPost extends Component{
    constructor(props){
        super(props);
        this.state = {
            posts : []
            }
        }

    componentDidMount(){
        fetch("http://localhost:8000/api/Post")
        .then((res)=> res.json())
        .then((data)=> this.setState({posts:data}))
    }

    handleLikes = (id) => {
        fetch(`http://localhost:8000/api/Post/${id}/likes/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        })
        .then((res) => res.json())
        .then((data) => window.location.reload());
        
    };
    handleDislikes = (id) => {
        console.log(id);
        fetch(`http://localhost:8000/api/Post/${id}/dislikes/`, {
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
            <div id='post-ul'>
                {this.state.posts.map((post)=>(
                <ul key={post.id} className=' mx-width card border-primary mb-3'>
                    <li id='post-li'>{post.text}</li>
                    <div id='btn-container'>
                        {/* <button id='likes-btn' className='btn btn-outline-success' onClick={() => {this.handleLikes(post.id)}}>
                        {post.likes} Likes
                        </button> */}
                        <Likes post_id={post.id} />
                        <Dislikes post_id={post.id} />
                    </div>
                    <div id='post-footer'>
                        <li className='text-muted'>{post.roast ? 'Roast' : 'Boast'}</li>
                        <li className='text-muted'>Created: {post.create_time.substring(0, 10)}</li>
                    </div>
                </ul>
                ))}
            </div>
        )
    }
}

export default AllPost