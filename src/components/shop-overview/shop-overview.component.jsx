import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { shopCollectionsArr } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview';


const ShopOverview = ({collectionsArray}) => {
    return(
        collectionsArray ?

        <div className='shop-overview'>
        {
            collectionsArray.map(({id, ...otherCollectionsProps}) => (
                <CollectionPreview key={id} {...otherCollectionsProps}/>
            ))
        }
        </div>

        :

        <h1>no data, sorry</h1>
    )

}

const mapStateProps = createStructuredSelector({
    collectionsArray: shopCollectionsArr
})

export default connect(mapStateProps)(ShopOverview);
