import React from 'react'
import './SignupScreen.css'

const SignUpScreen = (user) => {
  const register = (e) => {
    e.preventDefault();
    user=1;
  }
  const signIn = (e) => {
    e.preventDefault();
    user=2;
  }
  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign In</h1>
        <input placeholder='Email' type='email'/>
        <input placeholder='Password' type='password'/>
        <button type='submit' onClick={signIn}>Sign In</button>
        <h4><span className='gray'>New to Netflix?</span> <span className='signup' onClick={register}>Sign Up now</span></h4>
      </form>
    </div>
  )
}

export default SignUpScreen
