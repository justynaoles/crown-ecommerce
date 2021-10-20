import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size}) => (
    <li 
        className={`${size} menu-item`}
        style={{backgroundImage: `url(${imageUrl})`}}
    >
        <div className='content'>
            <h2 className='title'>{title}</h2>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </li>
)

export default MenuItem;