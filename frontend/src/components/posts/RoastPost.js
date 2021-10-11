import React, { Component } from 'react'
import Likes from './Likes'
import Dislikes from './DisLikes'
class RoastPost extends Component{
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
                        <Likes post_id={post.id} />
                        <Dislikes post_id={post.id}/>
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

export default RoastPost