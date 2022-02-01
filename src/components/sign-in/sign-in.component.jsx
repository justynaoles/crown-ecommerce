import React from 'react';
import { useState } from 'react';
import {connect} from 'react-redux';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {googleSignInStart, emailSignInStart } from '../../redux/user/user.action';

const SignIn = ({emailSignInStart, googleSignInStart}) => {

    const [credentials, setCredentials] = useState({email: '', password: ''});

    const handleSubmit = e => {
        e.preventDefault();

        const { email, password } = credentials;

        emailSignInStart(email, password);
    }

    const handleChange = e => {
        const { value, name } = e.target;

        setCredentials({...credentials, [name]: value});
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <p>Sign in with your email and password</p>
            <form className='form' onSubmit={handleSubmit}>
                <FormInput type='email' name='email' label='email' value={credentials.email} handleChange={handleChange} required/>
                <FormInput type='password' name='password' label='password' value={credentials.password} handleChange={handleChange} required/>
                <div className='button-wrapper'>
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleBtn>Sign in with Google</CustomButton>
                </div>
            </form>
        </div>
    )
    
}
//make action
const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps )(SignIn);