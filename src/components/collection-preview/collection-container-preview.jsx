
import { connect } from 'react-redux';
import { compose } from 'redux';
import ShopOverview from './../../components/shop-overview/shop-overview.component';
import Spinner from '../spinner/spinner.component';
import { createStructuredSelector } from 'reselect';
import { isFetchingSelector } from '../../redux/shop/shop.selectors';

const mapStateToProps = createStructuredSelector({
    isLoading: isFetchingSelector
})

//reading from right to left, shopovierview is passed to spinner
// export const CollectionPreviewContainer = connect(mapStateToProps)(Spinner(ShopOverview));

const CollectionPreviewContainer = compose (
    connect(mapStateToProps),
    Spinner
)(ShopOverview);

export default CollectionPreviewContainer;