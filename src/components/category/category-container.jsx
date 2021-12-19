import { connect } from 'react-redux';
import { compose } from 'redux';
import Category from '../../components/category/category.component';
import Spinner from '../spinner/spinner.component';
import { createStructuredSelector } from 'reselect';
import { isFetchingSelector } from '../../redux/shop/shop.selectors';

const mapStateToProps = createStructuredSelector({
    isLoading: isFetchingSelector
});

const CategoryContainer = compose(
    connect(mapStateToProps),
    Spinner
)(Category);

export default CategoryContainer;