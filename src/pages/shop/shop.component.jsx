import React from 'react';
import { Route } from 'react-router-dom';
import './shop.styles.scss';
import ShopOverview from './../../components/shop-overview/shop-overview.component';
import Category from '../../components/category/category.component';

const ShopPage = ({match}) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={ShopOverview}/>
        <Route exact path={`${match.path}/:categoryId`} component={Category}/>
    </div>
)

export default ShopPage;
