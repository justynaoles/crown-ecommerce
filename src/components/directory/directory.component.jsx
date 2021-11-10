import React from 'react';
import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { selectorSections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

const Directory = ({sections}) =>  (
            <ul className='directory-menu'>
                {
                    sections.map(({id, ...props}) => (
                        <MenuItem key={id} {...props}/>
                    ))
                }
            </ul>
       )
    
const mapStateProps = createStructuredSelector({
    sections: selectorSections
})

export default connect(mapStateProps)(Directory);