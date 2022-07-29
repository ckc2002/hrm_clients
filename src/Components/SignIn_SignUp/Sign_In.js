import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import { useSelector, useDispatch } from 'react-redux';
import { signIn, removeuser } from '../../Redux/actions/userActions';
import { NavLink, useNavigate } from 'react-router-dom'
import App from "../../App"


const Sign_In = () => {

    const users = useSelector((state) => state.alluser.user)
    const navigate = useNavigate()

    console.log(users)
    const dispatch = useDispatch()

    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleRegistration = (data) => {
        const curruser = users.filter((user) => user.username === data.username && user.password === data.password)

        if (curruser == 0) {
            console.log("Invalid Username and password")
        } else {
            dispatch(signIn(curruser))
            navigate("/list")
        }
        console.log(curruser)

    }

    const handleError = (errors) => { };

    const registerOpt = {
        username: { required: "Name is required" },
        password: {
            required: "Password is required",
            minLength: {
                value: 5,
                message: "Password must have at least 8 characters"
            }
        }
    }


    return (
        <>
            <form class="sign-in-form" onSubmit={handleSubmit(handleRegistration, handleError)}>
                <h2 class="title">Sign in</h2>
                <div class="input-field">
                    <i class="fas fa-user"></i>
                    <input type="text" placeholder="Username" name="username" {...register('username', registerOpt.username)} />
                </div>
                <div class="input-field">
                    <i class="fas fa-lock"></i>
                    <input type="password" placeholder="Password" name="password" {...register('password', registerOpt.password)} />
                </div>
                <input type="submit" value="Login" class="btn solid" />
                <p class="social-text">Or Sign in with social platforms</p>
                <div class="social-media">
                    <a href="#" class="social-icon">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" class="social-icon">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="social-icon">
                        <i class="fab fa-google"></i>
                    </a>
                    <a href="#" class="social-icon">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </form>
        </>
    )
}

export default Sign_In