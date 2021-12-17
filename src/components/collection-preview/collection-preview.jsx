import React from 'react';
import './collection-preview.styles.scss';
import { withRouter } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';
import { Link } from "react-router-dom";

const CollectionPreview = ({title, items, history, match, routeName}) => {

    console.log('match', match, history);
    return (

        <div className='collection-preview'>
            <Link to={`${match.path}/${title.toLowerCase()}`}>{title}</Link>
            <ul className='preview'>
                {
                    items
                    .filter((item, index) => index < 4 )
                    .map((item) => (
                        <CollectionItem key={item.id} item={item}/>
                    ))
                }
            </ul>
        </div>
    );
}

export default withRouter(CollectionPreview);