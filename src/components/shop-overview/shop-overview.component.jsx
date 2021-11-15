import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { shopCollectionsArr } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview';


const ShopOverview = ({collectionsArray}) => (

    <div className='shop-overview'>
        {
            collectionsArray.map(({id, ...otherCollectionsProps}) => (
                <CollectionPreview key={id} {...otherCollectionsProps}/>
            ))
        }
    </div>
)

const mapStateProps = createStructuredSelector({
    collectionsArray: shopCollectionsArr
})

export default connect(mapStateProps)(ShopOverview);
