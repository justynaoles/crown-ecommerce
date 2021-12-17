import { createSelector } from 'reselect';

const shopReducer = state => (
    state.shop
);

export const shopCollections = createSelector(
    [shopReducer],
    shop => shop.collections
);

export const shopCollectionsArr = createSelector(
    shopCollections,
    shopCollectionsArr => shopCollectionsArr ? Object.keys(shopCollectionsArr).map(key => shopCollectionsArr[key]) : []
)

export const shopCategory = (param) => createSelector(
    [shopCollections],
    category => category ? category[param] : null
)

export const isFetchingSelector = createSelector (
    [shopReducer],
    shop => shop.isFetchingCollection
)