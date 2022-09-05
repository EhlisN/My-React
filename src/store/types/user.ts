import { IUser } from "../../components/Users/IUser";

export interface UserState {
    users: IUser[]
}

export enum UserActionType {
    GET_USERS = 'GET_USERS'
}

interface GetUsersAction {
    type: UserActionType.GET_USERS
    payload: IUser[]
}

export type UsersAction = GetUsersAction