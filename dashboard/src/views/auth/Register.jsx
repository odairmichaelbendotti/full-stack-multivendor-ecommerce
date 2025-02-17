import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FaGoogle, FaFacebook } from "react-icons/fa";

const Register = () => {

    const [state, setState] = useState({
        name: '',
        email: '',
        password: ''
    })

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault()
        console.log(state)

        if (state.name && state.email && state.password) {
            setState({
                name: '',
                email: '',
                password: ''
            })
        } else {
            alert('All fields area required')
        }
    }

    return (
        <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
            <div className='w-[350px] text-[#FFFFFF] p-2'>
                <div className='bg-[#6f68d1] p-4 rounded-md'>
                    <h2 className='text-xl mb-3 font-bold'>Welcome to Ecommerce</h2>
                    <p className='text-sm mb-3 font-medium '>Please register your account</p>

                    <form onSubmit={submit}>
                        <div className='flex flex-col w-full gap-1 mb-3'>

                            {/* Name input */}
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder='Name'
                                value={state.name}
                                onChange={inputHandle}
                                id="name" required
                                className='bg-white px-3 py-1 outline-none border border-slate-400 rounded-md text-slate-600' />

                            {/* E-mail input */}
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                name="email"
                                placeholder='E-mail'
                                id="email"
                                value={state.email}
                                onChange={inputHandle}
                                required
                                className='bg-white px-3 py-1 outline-none border border-slate-400 rounded-md text-slate-600' />

                            {/* Password input */}
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder='Password'
                                id="password"
                                value={state.password}
                                onChange={inputHandle}
                                required
                                className='bg-white px-3 py-1 outline-none border border-slate-400 rounded-md text-slate-600' />

                            <div className='flex items-center w-full gap-3 mb-3'>
                                <input type="checkbox" name='checkbox' id='checkbox' className='w-4 h-4 text-blue-600 overflow-hidden bg-gray-200 rounded border-gray-300 focus:ring-blue-500' />
                                <label htmlFor="checkbox">I agree to privacy policy & terms</label>
                            </div>

                            {/* Sign in button */}
                            <button
                                className='bg-slate-800 w-full hover:bg-shadow-blue-300 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3 cursor-pointer'
                                onClick={submit}>Sign Up
                            </button>

                            <p className='w-full text-right text-xs'>Already have an account? <Link to='/login'><span className='underline'>Click here</span></Link></p>
                        </div>

                        <div className='w-full flex justify-center items-center mb-3'>
                            <div className='w-[45%] bg-slate-700 h-[1px]'></div>

                            <div className='w-[10%] flex justify-center items-center'>
                                <span className='pb-1'>Or</span>
                            </div>

                            <div className='w-[45%] bg-slate-700 h-[1px]'></div>
                        </div>

                        <div className='flex justify-center gap-3'>
                            <div className='w-[135px] h-[35px] flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden'>
                                <FaGoogle />
                            </div>

                            <div className='w-[135px] h-[35px] flex rounded-md bg-blue-700 shadow-lg hover:shadow-blue-700/50 justify-center cursor-pointer items-center overflow-hidden'>
                                <FaFacebook />
                            </div>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;