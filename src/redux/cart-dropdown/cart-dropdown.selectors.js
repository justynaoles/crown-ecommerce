import { createSelector } from 'reselect';

const selectorCartDropdown = state => (
    state.cartDropdown
)

export const selectorIsCartDropdownHidden = createSelector(
    [selectorCartDropdown],
    cartDropdown => cartDropdown.cartHidden
)