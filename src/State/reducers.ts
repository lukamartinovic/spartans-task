import {actionTypes} from './actionTypes'
import {IAction} from './types'

export const usersFetchingError = (state: object = {}, action: IAction) => {
    if(action.type === actionTypes.usersFetchingError){
        return {isError: action.isError, errorDescription: action.errorDescription}
    }
    else return state
};

export const usersFetching = (state: object = {}, action: IAction) => {
    if(action.type === actionTypes.usersFetching){
        return action.fetching
    }
    else return state
};

export const usersFetched = (state: object = {}, action: IAction) => {
    if(action.type === actionTypes.usersFetched){
        return action.fetchedUsers
    }
    else return state
};

