import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            {/* <nav class="navbar navbar-expand-lg navbar-light blue-grey lighten-5 mb-4"> */}

                <div className='navbar1'>

                <i className="bi bi-list"></i>

                <img className='navbar__image' src='https://static.toiimg.com/thumb/msid-76924993,width-400,resizemode-4/76924993.jpg' />
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

                <h5>Log In / Sign Up</h5>
                </div>

                <div className='navbar2'>
                    <p>All</p>
                    <p>Trending Songs</p>
                    <p>New Songs</p>
                    <p>Old Songs</p>
                    <p>Moods & Genre</p>
                    <p>Album</p>
                    <p>Radio</p>
                    <p>Podcast</p>
                    <p>My Music</p>

                </div>

            {/* </nav> */}
        </div>
    )
}

export default Navbar
