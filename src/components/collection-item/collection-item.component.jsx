import React from 'react';
import './collection-item.styles.scss';

const CollectionItem = ({name, imageUrl, price}) => (

    <div className='item-container'>
        <div className='collection-item'>
        <span className='image'
              style={{backgroundImage: `url(${imageUrl})`}}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
    </div>

    </div>
)

export default CollectionItem;