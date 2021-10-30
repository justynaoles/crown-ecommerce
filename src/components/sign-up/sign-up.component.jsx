import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'; 

class SignUp extends React.Component {

    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }


    handleChange = (e) => {

        const {value, name } = e.target;

        this.setState({[name] : value});

    }

    handleSubmit = async e => {
        e.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        //check if passwords match, currently basic validation
        if(password !== confirmPassword) {
            alert('Your passwords dont match');
            return;
        }

        try {

            //destructure state data
            const { user }  = await auth.createUserWithEmailAndPassword(email, password);

            //parameter user comes from  above, displayName comes from state destructure (current function)
            await createUserProfileDocument(user, {displayName});

            //when everything ok we clear form
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        
        } catch (error) {
            console.log('user sign up error', error);
        }

    }


    render () {
        return(
            <div className='sign-up'>
                <h2 className=''>I do not have an account yet</h2>
                <p>Please sign up with your email and password</p>
                <form className='form' onSubmit={this.handleSubmit}>
                    <FormInput type='text' name='displayName' label='name' value={this.state.displayName} handleChange={this.handleChange} required/>
                    <FormInput type='email' name='email' label='email' value={this.state.email} handleChange={this.handleChange} required/>
                    <FormInput type='password' name='password' label='password' value={this.state.password} handleChange={this.handleChange} required/>
                    <FormInput type='password' name='confirmPassword' label='confirm password' value={this.state.confirmPassword} handleChange={this.handleChange} required/>
                    <div className='button-wrapper'>
                        <CustomButton type='submit'>Sign up</CustomButton>
                    </div>
                </form>

            </div>
        );
    }
}

export default SignUp;