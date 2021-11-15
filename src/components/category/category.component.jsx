import React from 'react';
import './category.styles.scss';
import { connect } from 'react-redux';
import { shopCollections, shopCategory } from '../../redux/shop/shop.selectors';
import CollectionItem from '../collection-item/collection-item.component';

const Category = ({category}) => {
    return  (
        <div className='category-page'>
            {
                category ?
                <section>
                    <h1 className='title'>category: {category.title}</h1>
                    <div className='items'>
                        {
                        category.items.map(item => <CollectionItem key={item.id} item={item} className='item'/>)
                        }
                    </div>
                </section>

                :

                <p>404</p>

            }

        </div>
    )
}

const mapStateProps = (state, ownProps) => ({
    category: shopCategory(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateProps)(Category);