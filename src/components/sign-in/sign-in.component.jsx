import React from 'react';
import './sign-in.styles.scss';

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
    }

    handleChange = e => {
        const { value, name } = e.target;

        this.setState({[name]: value},()=>{
            console.log(this.state);
        });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>Sign in here</h2>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='email' 
                        name='email' 
                        value={this.state.email}
                        onChange={this.handleChange} 
                        required/>
                    <label htmlFor='email'>Email</label>

                    <input 
                        type='password' 
                        name='password' 
                        value={this.state.password}
                        onChange={this.handleChange}  
                        required/>
                    <label htmlFor='email'>Password</label>

                    <input type='submit' value='Submit form' />
                </form>

            </div>
        )
    }

}

export default SignIn;