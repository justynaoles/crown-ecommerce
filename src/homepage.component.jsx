import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
    <section className='homepage'>
        <ul className='directory-menu'>

            <li className='menu-item'>
                <div className='content'>
                    <h2 className='title'>HATS</h2>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </li>

            <li className='menu-item'>
                <div className='content'>
                    <h2 className='title'>JACKETS</h2>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </li>

            <li className='menu-item'>
                <div className='content'>
                    <h2 className='title'>SNEAKERS</h2>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </li>

            <li className='menu-item'>
                <div className='content'>
                    <h2 className='title'>WOMENS</h2>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </li>

            <li className='menu-item'>
                <div className='content'>
                    <h2 className='title'>MANS</h2>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </li>

        </ul>
    </section>
)


export default HomePage;