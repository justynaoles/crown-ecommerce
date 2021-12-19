import React from 'react';
import { Route } from 'react-router-dom';
import './shop.styles.scss';
import { connect } from 'react-redux';
import {fetchCollectionsAsync} from '../../redux/shop/shop.actions';
import {CollectionPreviewContainer} from '../../components/collection-preview/collection-container-preview';
import CategoryContainer from '../../components/category/category-container';

class ShopPage extends React.Component {

    componentDidMount() {
        const {fetchCollectionsAsync} = this.props;
        fetchCollectionsAsync();
    }

    render() {
        const {match} = this.props;

        return (
            <div className='shop-page'>
                {/* <Route exact path={`${match.path}`} component={ShopOverview}/>
                <Route exact path={`${match.path}/:categoryId`} component={Category}/> */}

                {/* element extracted into container collecetion preview container 
                <Route exact path={`${match.path}`} render={ props => (
                    <ShopOverViewSpinner isLoading={isFetchingSelector} {...props}/>
                )}/> */}

                
                <Route exact path={`${match.path}`} component={CollectionPreviewContainer}/>

                {/* <Route exact path={`${match.path}/:categoryId`} render={props => (
                    <CategoryWithSpiner isLoading={isFetchingSelector} {...props}/>
                )}/> */}

                <Route exact path={`${match.path}/:categoryId`} component={CategoryContainer}/>
            </div>
        )
    }
}


//make action
const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
