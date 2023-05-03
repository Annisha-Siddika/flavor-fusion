import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const Register = () => {
    const [error, setError] = useState('');
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        
        setError('')
        if(password !== confirm){
            setError('Your password did not match')
            return
        }
        else if(password.length < 6){
            setError('Password must be 6 characters or longer')
            return
        }

        createUser(email, password)
        .then(result =>{
            const createdUser = result.user;
            form.reset();
            console.log(createdUser);
            return updateUserProfile(name, photo);
        })
        .then(() => {
            console.log(name, photo);
          })
        .catch(error =>{
            console.log(error);
            setError(error.message);
        });


    };
    return (
        <div className='bg-slate-800 py-24'>
            <h2 className='text-2xl font-bold text-orange-300 text-center mb-4'>Please Register</h2>
            <div className='w-1/2 lg:w-1/4 mx-auto p-4 bg-slate-400 rounded'>
            
            <form onSubmit={handleSignUp}> 
                <div className='form-control'>
                    <label className='block font-semibold mb-2' htmlFor="name">User Name:</label>
                    <input className='p-2 mb-3 rounded w-5/6' type="text" name='name' id='name' placeholder='Your Name' required />
                    <label className='block font-semibold mb-2' htmlFor="email">Email</label>
                    <input className='p-2 mb-3 rounded w-5/6' type="email" name='email' id='email' placeholder='Your Email' required />
                    <label className='block font-semibold mb-2' htmlFor="password">Password</label>
                    <input className='p-2 mb-3 rounded w-5/6' type="password" name='password' id='password' placeholder='Your Password' required />
                    <label className='block font-semibold mb-2' htmlFor="confirm">Confirm Password</label>
                    <input className='p-2 mb-3 rounded w-5/6' type="password" name='confirm' id='confirm' placeholder='Your Password' required />
                    <label className='block font-semibold mb-2' htmlFor="photo">Photo URL:</label>
                    <input className='p-2 mb-3 rounded w-5/6' type="text" name='photo' id='photo' placeholder='Enter Photo URL' />

                </div>
                    <div className='text-center bg-orange-300 text-white font-bold text-xl py-1 rounded my-3'>
                        <input  type="submit" value='Register' /></div>
            </form>
            <p><small>Already have an account? Please <Link className='text-blue-900 font-semibold'  to='/login'>Login</Link> </small></p>
            <p className='text-error'>{error}</p>
        </div>
        </div>
    );
};

export default Register;