import React from 'react';
import { useEffect,  lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import './shop.styles.scss';
import { connect } from 'react-redux';
import {fetchCollectionsStart} from '../../redux/shop/shop.actions';
import Loader from '../../components/loader/loader.component';

const CollectionPreviewContainer = lazy(() => import('../../components/collection-preview/collection-container-preview'));
const CategoryContainer = lazy(() => import('../../components/category/category-container'));

const ShopPage = ({fetchCollectionsStart, match}) => {

    useEffect(()=> {

        fetchCollectionsStart();
        
    },[fetchCollectionsStart]);

    return (
        <div className='shop-page'>
            <Suspense fallback={<Loader />}>
                <Route exact path={`${match.path}`} component={CollectionPreviewContainer}/>
                <Route exact path={`${match.path}/:categoryId`} component={CategoryContainer}/>
            </Suspense>
        </div>
    )
    
}


//make action
const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
