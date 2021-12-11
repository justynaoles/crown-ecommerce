import React from 'react';
import styles from './spinner.module.scss';

const Spinner = WrappedComponent => {

    const spinner = ({isLoading, ...otherProps}) => {
        
        return isLoading ? 
        <div className={styles.spinnerOverlay}>
            <div className={styles.spinnerContainer}></div>
        </div> 
        :
        <WrappedComponent {...otherProps}/>
    }
    
    return spinner;
}

export default Spinner;   