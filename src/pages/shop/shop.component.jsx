import React from 'react';
import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import './shop.styles.scss';
import { connect } from 'react-redux';
import {fetchCollectionsStart} from '../../redux/shop/shop.actions';
import {CollectionPreviewContainer} from '../../components/collection-preview/collection-container-preview';
import CategoryContainer from '../../components/category/category-container';

const ShopPage = ({fetchCollectionsStart, match}) => {

    useEffect(()=> {

        fetchCollectionsStart();
        
    },[fetchCollectionsStart]);

    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionPreviewContainer}/>
            <Route exact path={`${match.path}/:categoryId`} component={CategoryContainer}/>
        </div>
    )
    
}


//make action
const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
