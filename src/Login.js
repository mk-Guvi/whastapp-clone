import React from 'react'
import "./Login.css"
import {Button} from "@material-ui/core"
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'
function Login() {
    const [{},dispatch]=useStateValue();//it is used to pull the data from the data layer
    
    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then(
            //result=>console.log(result)
            result=>{
                dispatch({//it pushes the user data to data layer
                    type:actionTypes.SET_USER,//it push data to the data layer .to avoid accidentally typing wrong strings we created a object with correct mapping
                    user:result.user//it refers to the user of google
                })
            }
            )
        .catch(e=>alert(e.message))

    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/598px-WhatsApp.svg.png" alt="Loading"/>
                <div className="login__text">
                    <h1>Sign In to Whatsapp</h1>
                </div>
                <Button onClick={signIn}>
                    Sign In With Google
                </Button>


            </div>
        </div>
   
    )
}   

export default Login 
