import React from 'react';
import styles from './loader.module.scss';

const Loader = () => (
    <div className={styles.spinnerOverlay}>
    <div className={styles.spinnerContainer}></div>
</div> 
)

export default Loader;   