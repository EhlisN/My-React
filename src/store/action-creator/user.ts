import { Dispatch } from "redux"
import http from "../../https/http"
import { UserActionType, UsersAction } from "../types/user"

export const getUsers = () => {
    return async (dispatch: Dispatch<UsersAction>) => {
        const response = await http.get('users')
        dispatch({type: UserActionType.GET_USERS, payload: response.data})
    }
}