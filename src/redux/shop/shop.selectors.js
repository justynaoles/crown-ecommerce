import { createSelector } from 'reselect';

const shopReducer = state => (
    state.shop
);

export const shopCollections = createSelector(
    [shopReducer],
    shop => shop.collections
);

export const shopCategory = (param) => createSelector(
    [shopCollections],
    category => category[param]
)