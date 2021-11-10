import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { shopCollections } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview';


const ShopOverview = ({collections}) => (

    <div className='shop-overview'>
        {
            collections.map(({id, ...otherCollectionsProps}) => (
                <CollectionPreview key={id} {...otherCollectionsProps}/>
            ))
        }
    </div>
)

const mapStateProps = createStructuredSelector({
    collections: shopCollections
})

export default connect(mapStateProps)(ShopOverview);
