import { createSelector } from 'reselect';

//state, take only user part
const selectorUser = state => (
    state.user
)


//take a state with only user part and take only currentUser from user
export const selectorCurrentUser = createSelector(
    [selectorUser],
    user => user.currentUser
)