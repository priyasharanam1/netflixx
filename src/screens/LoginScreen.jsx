import React, {useState} from 'react'
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen';

const LoginScreen = () => {
  const [signIn, setSiignIn] = useState(false);
  return (
    <div className='loginScreen'>
     <div className='loginScreen__background'>
        <img className='loginScreen__logo' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='netflix'></img>
        <button onClick={()=> setSiignIn(true)} className='loginScreen__button'>Sign In</button>
        <div className='loginScreen__gradient'></div>
     </div>
     <div className='loginScreen__body'>
     {signIn ? (<SignUpScreen/>) :
      (
        <div>
        <h1>Unlimited films, TV programs and more.</h1>
        <h2>Watch anywhere, Cancel at anytime.</h2>
        <h3>Ready to watch? Enter your Email to create or restart your membership.</h3>
        <div className="loginScreen__input">
          <form action="">
            <input type='email' placeholder='Email Address'/>
            <button onClick={() => setSiignIn(true)} className='loginScreen__getStarted'>GET STARTED</button>
          </form>
        </div>
      </div>
     )}
     </div>
    </div>
  )
}

export default LoginScreen
