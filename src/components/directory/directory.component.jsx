import React from 'react';
import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { directorySections } from '../../redux/directory/directory.selectors';
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

// const mapStateProps = (state) => ({
//     directory: selectorSections
// })


//below createStructuredSelector let as changed name from directory to sections
const mapStateProps = createStructuredSelector({
    sections: directorySections
})

export default connect(mapStateProps)(Directory);