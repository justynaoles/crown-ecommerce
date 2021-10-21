import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <li className={`${size} menu-item`} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
            <span className='background-image' style={{backgroundImage: `url(${imageUrl})`}}></span>
            <div className='content'>
                <h2 className='title'>{title}</h2>
                <span className='subtitle'>SHOP NOW</span>
            </div>
    </li>
)

export default withRouter(MenuItem);