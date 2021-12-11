import React from 'react';
import { Route } from 'react-router-dom';
import './shop.styles.scss';
import ShopOverview from './../../components/shop-overview/shop-overview.component';
import Category from '../../components/category/category.component';
import { firestore, collectionData } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import {updateCollection} from '../../redux/shop/shop.actions';
import Spinner from '../../components/spinner/spinner.component';

const ShopOverViewSpinner = Spinner(ShopOverview);
const CategoryWithSpiner = Spinner(Category);

class ShopPage extends React.Component {

    state = {
        loading: true
    }

    componentDidMount() {

        const {updateCollection} = this.props;

        //get collection from db 
        const collectionRef = firestore.collection('collection');
        collectionRef.get().then((snapShot) => {

            const snapShotCollection = snapShot.docs;
            const collectionMap = collectionData(snapShotCollection);

            updateCollection(collectionMap);

        }).catch(error => {
            console.log('error', error);
        });

        this.setState({
            loading: false
        })

        console.log('shop componenet');
    }

    render() {
        const {match} = this.props;
        const {loading} = this.state;

        return (
            <div className='shop-page'>
                {/* <Route exact path={`${match.path}`} component={ShopOverview}/>
                <Route exact path={`${match.path}/:categoryId`} component={Category}/> */}


                <Route exact path={`${match.path}`} render={ props => (
                    <ShopOverViewSpinner isLoading={loading} {...props}/>
                )}/>
                <Route exact path={`${match.path}/:categoryId`} render={props => (
                    <CategoryWithSpiner isLoading={loading} {...props}/>
                )}/>
            </div>
        )
    }
}

//make action
const mapDispatchToProps = (dispatch) => ({
    updateCollection: (collectionMap) => dispatch(updateCollection(collectionMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
