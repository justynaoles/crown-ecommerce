import React from 'react';
import './sign.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';

const Sign = ({user}) => (
    <div className='sign-page'>
        {user ? <h2>Hello {user.displayName}!</h2> : <SignIn />}
    </div>
)

export default Sign;