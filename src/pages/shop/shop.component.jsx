import React from 'react';
import { Route } from 'react-router-dom';
import './shop.styles.scss';
import ShopOverview from './../../components/shop-overview/shop-overview.component';
import Category from '../../components/category/category.component';
import { firestore, collectionData } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import {updateCollection} from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {

    componentDidMount() {


        const {updateCollection} = this.props;

        //get collection from db 
        const collectionRef = firestore.collection('collection');
        collectionRef.get().then((snapShot) => {

            const snapShotCollection = snapShot.docs;
            const collectionMap = collectionData(snapShotCollection);

            updateCollection(collectionMap);

        });
    }

    render() {
        const {match} = this.props;

        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={ShopOverview}/>
                <Route exact path={`${match.path}/:categoryId`} component={Category}/>
            </div>
        )
    }
}

//make action
const mapDispatchToProps = (dispatch) => ({
    updateCollection: (collectionMap) => dispatch(updateCollection(collectionMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
