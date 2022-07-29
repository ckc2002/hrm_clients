import React, { useState } from 'react'
import "./style.css"
import log from "./img/log.svg"
import register from "./img/register.svg"
import Sign_In from './Sign_In'
import Sign_Up from './Sign_Up'

const Login = () => {

    const [active, setActive] = useState(false)

    return (
        <>
            <div className={active ? "container sign-up-mode" : "container"}>
                <div class="forms-container">
                    <div class="signin-signup">
                        <Sign_In />
                        <Sign_Up />
                    </div>
                </div>

                <div class="panels-container">
                    <div class="panel left-panel">
                        <div class="content">
                            <h3>New here ?</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                ex ratione. Aliquid!
                            </p>
                            <button class="btn transparent" id="sign-up-btn" onClick={() => setActive(true)}>
                                Sign up
                            </button>
                        </div>
                        <img src={log} class="image" alt="" />
                    </div>
                    <div class="panel right-panel">
                        <div class="content">
                            <h3>One of us ?</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                laboriosam ad deleniti.
                            </p>
                            <button class="btn transparent" id="sign-in-btn" onClick={() => setActive(false)}>
                                Sign in
                            </button>
                        </div>
                        <img src={register} class="image" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login