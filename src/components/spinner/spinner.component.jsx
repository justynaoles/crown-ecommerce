import React from 'react';
import './spinner.module.scss';

const Spinner = WrappedComponent => {

    const spinner = ({isLoading, ...otherProps}) => {
        return isLoading ? <h2>spinner</h2> : <WrappedComponent {...otherProps}/>
    }
    
    return spinner;
}

export default Spinner;   