import React from 'react'
import './Login.css'
import Popup from './componenets/Popup'
import {useState} from 'react'

function Login() {

    const [buttonPopup , setButtonPopup] = useState(false);

    return (
        <div className='login'>
            <div className='login_inner'> 
            <button onClick={()=>setButtonPopup(true)}>Log In / Sign Up</button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3>This is the login or signup page</h3>
            </Popup>
            </div>
        </div>
    )
}

export default Login
