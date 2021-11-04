import { createSelector } from 'reselect';

const selectorMobile = state => (
    state.mobileMenu
)

export const selectorIsMobileMenuHidden = createSelector(
    [selectorMobile],
    mobileMenu => mobileMenu.isMobileMenuHidden
)

export const selectorIsAriaExpanded = createSelector(
    [selectorMobile],
    mobileMenu => mobileMenu.isAriaExpanded
)