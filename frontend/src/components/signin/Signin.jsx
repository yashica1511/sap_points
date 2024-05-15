import { useNavigate } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import MainPage from '../../Mainpage';
import { StudentProvider, StudentContext } from '../../context/StudentContext';
import supabase from '../../database/Client';

function Signin() {
    const [next, setNext] = useState(false);
    const navigate = useNavigate();
    const { Authenticated,
        setAuthenticated,
        student,
        setStudent,
        Email,
        setEmail } = useContext(StudentContext);

    const onSub = async () => {
        const email = document.getElementById('email').value
        const pwd = document.getElementById('pwd').value

        let { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: pwd
        })
        if (error) {
            console.log(error);
            alert('Email or Password is Wrong');
        }
        else {
            setAuthenticated(true);
            setEmail(email);
            console.log(data);
            if (email === 'admin@kongu.edu') {
                navigate('/admin_1'); 
            } else {
                navigate('/Personalinfo');
            }

        }
    }
        const but =
            <>
                <button
                    className="button absolute top-20 right-40 mt-6 py-2 px-4 w-20 h-10 rounded-md font-semibold focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-blue-500 text-white box"
                    onClick={() => { setNext(true) }}>
                    <h5>Next</h5>
                </button>
            </>

        const nexttext =
            <>
                <h2 className="text-2xl font-bold my-2"><b>Password</b></h2>
                <div className="textbox mt-2">
                    <input type="password" id='pwd' className="textbox w-4/5 h-15 px-3 py-2 placeholder-gray-400 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter your password" />
                </div>
                <div className="flex item-start">
                    <div className="text-sm my-2">
                        <a href="/forgot" className="left-10 font-medium text-black-600 hover:text-purple-500">
                            <h6>Forgot password?</h6>
                        </a>
                    </div>
                </div>
                <div className="">
                    <button
                        className="button absolute top-20 right-40 mt-[100px] py-2 px-4 w-20 h-10 rounded-md font-semibold focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-blue-500 text-white box"
                        onClick={onSub}
                    >
                        <h5>LogIn</h5>
                    </button>
                </div>
            </>
       
        return (
            <div>
                <MainPage />
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:w-full md:w-3/4 lg:w-1/2 xl:w-1/3 2xl:w-[80vw] h-auto sm:h-full bg-[rgba(255,255,255,0.85)] rounded-xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        <div className='column1'>
                            <div className="flex items-start justify-center">
                                <div className="w-10 h-10 relative top-14">
                                    <img src="./images/logo.png" alt="Logo" width="10" height="10" className="w-full h-full rounded-lg border border-gray-400" />
                                </div>
                            </div>
                            <div className="flex items-start justify-center">
                                <div className="relative top-20">
                                    <h1>Kongu Engineering College</h1>
                                </div>
                            </div>
                            <div className="relative top-32 left-12">
                                <h2 className="text-2xl font-bold"><b>Sign In</b></h2>
                            </div>
                            <div className="relative top-32 left-12 mt-2">
                                <h6 className="text">Unlock happiness: Sign in to access SAP calculation tool.</h6>
                            </div>   
                                <div className="relative top-32 left-12 mt-4">
                                <h2 className="text-2xl font-bold"><b>Email</b></h2>
                                <div className="textbox mt-2">
                                    <input type="text" className="textbox w-4/5 h-15 px-3 py-2 placeholder-gray-400 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        id='email'
                                        placeholder="Enter your email"

                                    />
                                </div>
                                {next ? nexttext : but}
                            </div>
                        </div>
                        <div className="column2">
                            
                        <img src='./images/study_group_2.jpg' alt="Study group" className="w-full h-auto sm:h-full object-cover rounded-md" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    export default Signin;
