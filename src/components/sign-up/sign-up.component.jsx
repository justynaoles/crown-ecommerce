import React from 'react';
import { useState } from 'react';
import {connect} from 'react-redux';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signUpStart} from '../../redux/user/user.action';

const SignUp = ({signUpStart}) => {


    const [credentials, setCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

   const handleChange = (e) => {
        const {value, name } = e.target;
        setCredentials({...credentials,[name] : value});

    }

   const handleSubmit = async e => {
        e.preventDefault();

        const {displayName, email, password, confirmPassword} = credentials;
       
        //check if passwords match, currently basic validation
        if(password !== confirmPassword) {
            alert('Your passwords dont match');
            return;
        }

        try {

            signUpStart(email, password, displayName);

            setCredentials({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        
        } catch (error) {
            console.log('user sign up error', error);
        }

    }
        return(
            <div className='sign-up'>
                <h2 className=''>I do not have an account yet</h2>
                <p>Please sign up with your email and password</p>
                <form className='form' onSubmit={handleSubmit}>
                    <FormInput type='text' name='displayName' label='name' value={credentials.displayName} handleChange={handleChange} required/>
                    <FormInput type='email' name='email' label='email' value={credentials.email} handleChange={handleChange} required/>
                    <FormInput type='password' name='password' label='password' value={credentials.password} handleChange={handleChange} required/>
                    <FormInput type='password' name='confirmPassword' label='confirm password' value={credentials.confirmPassword} handleChange={handleChange} required/>
                    <div className='button-wrapper'>
                        <CustomButton type='submit'>Sign up</CustomButton>
                    </div>
                </form>
            </div>
        );
}

//make action
const mapDispatchToProps = (dispatch) => ({
    signUpStart: (email, password, displayName) => dispatch(signUpStart({email, password, displayName}))
});

export default connect(null, mapDispatchToProps)(SignUp);