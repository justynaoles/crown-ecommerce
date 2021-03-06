import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = ({item, addItem}) => {
    const {name, imageUrl, price} = item;
    return (
        <li className='item-container'>
            <div className='collection-item'>
                <span className='image'
                    style={{backgroundImage: `url(${imageUrl})`}}
                />
                <div className='collection-footer'>
                    <span className='name'>{name}</span>
                    <span className='price'>{price}</span>
                </div>
            </div>
            <CustomButton onClick={() => addItem(item)}inverted>Add to cart</CustomButton>
        </li>
    )
}


//make action
const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);