import React from 'react'
import './Login.css'
import Popup from './componenets/Popup'
import {useState} from 'react'
import login from './login1.png'

function Login() {

    const [buttonPopup , setButtonPopup] = useState(false);

    return (
        <div className='login'>
            <div className='login_inner'> 
            <button onClick={()=>setButtonPopup(true)}>Log In / Sign Up</button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <div className='popnew'>
                {/* <div className='poppart1'>
                <p>Hello</p>
                </div>
                <div className='poppart2'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg2e1K5mD2ZkuCIw5B0RPaS1P1I1YaRRBoQDYZcw-XZcnReyLK'/>
                    
                </div> */}

                <img src={login} alt=''/>
                </div>
            </Popup>
            </div>
        </div>
    )
}

export default Login
