import { createSelector } from 'reselect';

const selectorReducer = state => (
    state.directory
);

export const selectorSections = createSelector(
    [selectorReducer],
    directory => directory.sections
);

