import React, { Component } from 'react'

class NewPost extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: '',
            likes: 0,
            dislikes: 0,
            roast: true,
        }
    }
    
    handlesubmit=(event)=>{
        let success = document.getElementById('sucess-post')
        event.preventDefault()
        let data = {
            text: this.state.text,
            likes: this.state.likes,
            dislikes: this.state.dislikes,
            roast: this.state.roast,
        }
        fetch('http://localhost:8000/api/Post/', {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(data)
        })

        if(data){
            success.innerText = 'post was submitted!'
        }

    }
    handleChange=(event)=>{
        this.setState({...this.state, text: event.target.value})
    }
    handleSelectChange=(event)=>{
        this.setState({...this.state, roast: event.target.value})
    }
    render(){
        return (
            <div className="form-container">
                <form id='form-ui' onSubmit={this.handlesubmit} >
                <div class="form-group move">
                    <label for="Textarea" class="form-label mt-4">Have something you want to post?</label>
                    <textarea class="form-control" id="Textarea" rows="3" cols="50" value={this.state.text} onChange={this.handleChange}></textarea>
                </div>

                <label for="Select1" className="move form-label mt-4">Choose if it's a Roast or Boast:
                <div class="form-group">
                    <select class="form-select" id="Select1" value={this.state.roast} onChange={this.handleSelectChange}>
                    <option value={false}>Boast</option>
                <option value={true}>Roast</option>
                    </select>
                </div>
                </label>
                <br/>
                <p id='sucess-post' className="text-success"></p>
                <button id='form-btn' type='submit' className='btn btn-outline-primary'>Post</button>
            </form>
            
            </div>
        );
    }
}

export default NewPost