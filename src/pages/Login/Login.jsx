import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
    const [show, setShow] = useState(false)
    const [error, setError] = useState('');
    const {signIn, googleSignIn, githubSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('')
        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            navigate(from, {replace: true})
        })
        .catch(error =>{
            console.log(error);
            setError(error.message);
        })

    }
    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, {replace: true})
        })
        .catch(error =>{
            console.log(error);
            setError(error.message);
        })
    }
    const handleGithubSignIn = ()=>{
        githubSignIn()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, {replace: true})
        })
        .catch(error =>{
            console.log(error);
            setError(error.message);
        })
    }
    return (
        <div className='bg-slate-800 pt-24 h-screen'>
            <h2 className='text-2xl font-bold text-orange-300 text-center mb-4'>Please Login</h2>
            <div className='w-1/2 lg:w-1/4 mx-auto p-4 bg-slate-400 rounded'>
            
            <form onSubmit={handleSignIn}>
                <div className='form-control'>
                    <label className='block font-semibold mb-2' htmlFor="email">Email:</label>
                    <input className='p-2 mb-3 rounded w-5/6' type="email" name='email' id='email' placeholder='Your Email' required />
                    <label className='block font-semibold mb-2' htmlFor="password">Password</label>
                    <div className='flex items-center'>
                    <input className='grow p-2 mb-3 rounded' type={show ?  'text' : "password"} name='password' id='password' placeholder='Your Password' required />
                    <p className='pb-4 pl-6' onClick={()=>setShow(!show)}>
                        {
                            show ? <span><FaEye></FaEye></span> : <span><FaEyeSlash></FaEyeSlash></span>
                        }
                        </p>
                    </div>

                </div>
                    <div className='text-center bg-orange-300 text-white font-bold text-xl py-1 rounded my-3'><input type="submit" value='Login' /></div>
                    <div>
                        <div className='text-center  text-blue-600 font-semibold py-1 pl-3 border-2 border-blue-600 rounded my-3'><button onClick={handleGoogleSignIn} className='flex items-center gap-3'><FaGoogle></FaGoogle> Continue with Google</button></div>
                        <div className='text-center   font-semibold py-1 pl-3 border-2 border-black rounded my-3'><button onClick={handleGithubSignIn} className='flex items-center gap-3'><FaGithub></FaGithub> Continue with Github</button></div>
                    </div>


            </form>
            <p><small>New to Flavor fusion? <Link className='text-blue-900 font-semibold' to='/register'> Create New Account</Link> </small></p>
            <p className='text-red-700 font-semibold'>{error}</p>
        </div>
        </div>
    );
};

export default Login;