import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Login from './Login'

function Navbar() {
    return (
        <div className='navbar'>
            {/* <nav class="navbar navbar-expand-lg navbar-light blue-grey lighten-5 mb-4"> */}
                <div className='navbar1'>
                

                    <i className="bi bi-list"></i>
                
                <Link to="/">
                <img className='navbar__image' alt="not found" src='https://static.toiimg.com/thumb/msid-76924993,width-400,resizemode-4/76924993.jpg' />
                </Link>
            <div className='navbar__search'>
                <i className="bi bi-search"></i>
                <input type='text'className='search' placeholder='Search Artists, Songs , Albums' />
            </div>

                <div className='ad'>
                    <p>Go Add free</p>
                    <p>Go Gaana Plus</p>
                </div>

                <i class="bi bi-translate"></i>

                <i class="bi bi-moon"></i>

                <Login/>
            </div>

            <div className='navbar2'>
            <Link to='/' className='nd'>
                <p>All</p>
                </Link>
                <Link to='/trending' className='nd'>
                    <p >Trending Songs</p>
                </Link>
                <Link to='/newsongs' className='nd'>
                    <p>New Songs</p>
                </Link>
                <Link to='/oldsongs' className='nd'>
                    <p>Old Songs</p>
                </Link>
                <Link to='/moods' className='nd'>
                    <p>Moods & Genre</p>
                </Link>
                <Link to='/album' className='nd'>
                    <p>Album</p>
                </Link>
                <Link to='/radio' className='nd'>
                    <p>Radio</p>
                </Link>
                <Link to='/podcast' className='nd'>
                    <p>Podcast</p>
                </Link>
                <Link to='/mymusic' className='nd'>
                    <p>My Music</p>
                </Link>

            </div>

            {/* </nav> */}
        </div>
    )
}

export default Navbar
