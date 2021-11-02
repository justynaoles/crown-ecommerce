import React from "react";
import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleBtn, inverted, ...otherProps}) => (

    <button className={`${isGoogleBtn ? 'google-btn' : ''} ${inverted ? 'inverted' : ''} custom-button`} {...otherProps}>{children}</button>
)

export default CustomButton;