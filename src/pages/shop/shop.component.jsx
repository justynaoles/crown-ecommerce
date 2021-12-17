import React from 'react';
import { Route } from 'react-router-dom';
import './shop.styles.scss';
import ShopOverview from './../../components/shop-overview/shop-overview.component';
import Category from '../../components/category/category.component';
import { connect } from 'react-redux';
import {fetchCollectionsAsync} from '../../redux/shop/shop.actions';
import Spinner from '../../components/spinner/spinner.component';
import { isFetchingSelector } from '../../redux/shop/shop.selectors';

const ShopOverViewSpinner = Spinner(ShopOverview);
const CategoryWithSpiner = Spinner(Category);

class ShopPage extends React.Component {

    componentDidMount() {
        const {fetchCollectionsAsync} = this.props;
        fetchCollectionsAsync();
    }

    render() {
        const {isFetchingSelector, match} = this.props;

        console.log(match, 'match');

        return (
            <div className='shop-page'>
                {/* <Route exact path={`${match.path}`} component={ShopOverview}/>
                <Route exact path={`${match.path}/:categoryId`} component={Category}/> */}


                <Route exact path={`${match.path}`} render={ props => (
                    <ShopOverViewSpinner isLoading={isFetchingSelector} {...props}/>
                )}/>
                <Route exact path={`${match.path}/:categoryId`} render={props => (
                    <CategoryWithSpiner isLoading={isFetchingSelector} {...props}/>
                )}/>
            </div>
        )
    }
}

//get data
const mapStateProps = (state) => ({
    isFetchingSelector: isFetchingSelector(state),
});

//make action
const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync()),
});

export default connect(mapStateProps, mapDispatchToProps)(ShopPage);
