import React from 'react';
import {connect} from 'react-redux';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {googleSignInStart, emailSignInStart } from '../../redux/user/user.action';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const { emailSignInStart } = this.props; 
        const { email, password } = this.state;

        console.log(email, password)

        emailSignInStart(email, password);
    }

    handleChange = e => {
        const { value, name } = e.target;

        this.setState({[name]: value});
    }

    render() {

        const {googleSignInStart} = this.props;
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <p>Sign in with your email and password</p>
                <form className='form' onSubmit={this.handleSubmit}>
                    <FormInput type='email' name='email' label='email' value={this.state.email} handleChange={this.handleChange} required/>
                    <FormInput type='password' name='password' label='password' value={this.state.password} handleChange={this.handleChange} required/>
                    <div className='button-wrapper'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleBtn>Sign in with Google</CustomButton>
                    </div>
                </form>

            </div>
        )
    }
}
//make action
const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps )(SignIn);