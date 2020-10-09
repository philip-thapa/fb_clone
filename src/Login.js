import React from 'react'
import { auth, provider } from './firebase'
import "./Login.css"
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'


function Login() {
    const [state, dispatch] = useStateValue()
    const signin = () => {
        auth.signInWithPopup(provider)
        .then(result=>{
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
            console.log(result)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://www.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png" alt=""/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1200px-Facebook_Logo_%282019%29.svg.png" alt=""/>
            </div>
            <button type="submit" onClick={signin}>Sign in</button>
        </div>
    )
}

export default Login
