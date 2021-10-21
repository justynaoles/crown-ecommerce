import React from 'react';
import './directory.styles.scss';
import { sections } from '../../assets/directory.data';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {

    constructor() {
        super();
        this.state = {
            sections: [...sections]
        }
    }


    render() {

        console.log(this.state.sections);
        return (
            <ul className='directory-menu'>
                {
                    this.state.sections.map( ({id, ...props}) => (
                        <MenuItem key={id} {...props}/>
                    ))
                }
            </ul>
        )
    }
}

export default Directory;