import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux';
import { signUp, removeuser } from '../../Redux/actions/userActions';

const Sign_Up = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const dispatch = useDispatch()

    const handleRegistration = (data) => {
        dispatch(signUp(data))
    }

    const handleError = (errors) => { };

    const registerOpt = {
        username: { required: "Username is required" },
        email: { required: "Email is required" },
        password: {
            required: "Password is required",
            minLength: {
                value: 5,
                message: "Password must have at least 5 characters"
            }
        }
    }

    return (
        <>
            <form class="sign-up-form" onSubmit={handleSubmit(handleRegistration, handleError)}>
                <h2 class="title">Sign up</h2>
                <div class="input-field">
                    <i class="fas fa-user"></i>
                    <input type="text" placeholder="Username" name='username' {...register('username', registerOpt.username)} />

                </div>
                <div class="input-field">
                    <i class="fas fa-envelope"></i>
                    <input type="email" placeholder="Email" name='email' {...register('email', registerOpt.email)} />
                </div>
                <div class="input-field">
                    <i class="fas fa-lock"></i>
                    <input type="password" placeholder="Password" name='password' {...register('password', registerOpt.password)} />
                </div>
                <input type="submit" class="btn" value="Sign up" />
                <p class="social-text">Or Sign up with social platforms</p>
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

export default Sign_Up