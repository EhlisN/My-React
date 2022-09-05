import { IUser } from "../../components/Users/IUser";

export interface UserState {
    users: IUser[]
}

export enum UserActionType {
    GET_USERS = 'GET_USERS',
    DELETE_USERS = 'DELETE_USERS'
}

interface GetUsersAction {
    type: UserActionType.GET_USERS
    payload: IUser[]
}

interface DeleteUsersAction {
    type: UserActionType.DELETE_USERS
    payload: number
}

export type UsersAction = GetUsersAction