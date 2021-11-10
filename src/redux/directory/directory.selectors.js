import { createSelector } from 'reselect';

const directoryReducer = state => (
    state.directory
);

export const directorySections = createSelector(
    [directoryReducer],
    directory => directory.sections
);

