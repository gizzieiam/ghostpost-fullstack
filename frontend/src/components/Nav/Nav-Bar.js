import React from 'react'
import {Link} from "react-router-dom";

export default function NavBar(props){
    return(
        <div id='nav-container'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand left" href="/">
                        <h1 id='site-name'>
                            GhostPost
                        </h1>
                    </a>

                    <div class="collapse navbar-collapse" id="navbarColor03">
                        <ul id='nav-ul' class="navbar-nav me-auto">
                            <li className='nav-item'>
                                <Link to="/" className='nav-link'>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/roast" className='nav-link'>Roast</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/boast" className='nav-link'>Boast</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/highest" className='nav-link'>Most Liked</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/newPost" className='nav-link'>Add Post</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}