import {actionTypes} from '../actionTypes'
import {IUserAction} from './types'

export const userReducer = (state: object = {}, action: IUserAction) => {
    switch (action.type) {
        case actionTypes.usersFetchingError:
            return {...state, isError: action.isError, error: action.error};
        case actionTypes.usersFetching:
            return {...state, usersFetching: action.fetching};
        case actionTypes.userFetching:
            return {...state, userFetching: action.fetching};
        case actionTypes.usersFetched:
            return {...state, fetchedUsers: action.fetchedUsers};
        case actionTypes.userFetched:
            return {...state, fetchedUser: action.fetchedUser};
        case actionTypes.clearUser:
            return {...state, fetchedUser: undefined};
        default:
            return state
    }
};