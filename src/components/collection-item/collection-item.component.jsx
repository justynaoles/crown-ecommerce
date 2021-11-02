import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = ({item}) => {
    const {name, imageUrl, price} = item;
    return (

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
    
            <CustomButton inverted>Add to cart</CustomButton>
    
        </div>
    )
}

export default CollectionItem;