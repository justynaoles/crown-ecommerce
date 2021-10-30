import React from 'react';
import './sign.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const Sign = ({user}) => (
    <div className='sign-page'>
        {user ? <h2>Hello {user.displayName}!</h2> : <div className='sign-wrapper'><SignIn /><SignUp /></div>}
    </div>
)

export default Sign;