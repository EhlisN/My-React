import { IUser } from "../../components/Users/IUser";

export interface UserState {
    users: IUser[];
    status?: number;
    userId?: number
}

export enum UserActionType {
    GET_USERS = 'GET_USERS',
    DELETE_USER = 'DELETE_USER'
}

interface GetUsersAction {
    type: UserActionType.GET_USERS
    payload: IUser[]
}

interface DeleteUsersAction {
    type: UserActionType.DELETE_USER
    payload: number
}

export type UsersAction = GetUsersAction | DeleteUsersAction