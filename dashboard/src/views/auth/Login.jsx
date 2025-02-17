import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FaGoogle, FaFacebook } from "react-icons/fa";

const Login = () => {

    const [completeInput, setCompleteInput] = useState(true)
    const [state, setState] = useState({
        email: '',
        password: ''
    })

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        console.log(state)
    }

    const submit = (e) => {
        e.preventDefault()

        if (state.email && state.password) {
            setCompleteInput(true)
        } else {
            setCompleteInput(false)
        }
    }

    return (
        <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
            <div className='w-[350px] text-[#FFFFFF] p-2'>
                <div className='bg-[#6f68d1] p-4 rounded-md'>
                    <h2 className='text-xl mb-3 font-bold'>Welcome to Ecommerce</h2>
                    <p className='text-sm mb-3 font-medium '>Please Sign In your account</p>

                    <form onSubmit={submit}>
                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                name="email"
                                placeholder='E-mail'
                                id="email"
                                value={state.name}
                                onChange={inputHandle}
                                className='bg-white px-3 py-1 outline-none border border-slate-400 rounded-md text-slate-600'
                            />

                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder='Password'
                                id="password"
                                value={state.name}
                                onChange={inputHandle}
                                className='bg-white px-3 py-1 outline-none border border-slate-400 rounded-md text-slate-600'
                            />

                            {!completeInput && 
                            <p className='text-sm text-red-300 font-bold'>All fields are required.</p>}

                            <button className='bg-slate-800 w-full hover:bg-shadow-blue-300 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3 cursor-pointer mt-2'>Sign In</button>

                            <p className='w-full text-right text-xs'>Don't have an account? <Link to='/register'><span className='underline'>Click here</span></Link></p>
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

export default Login;