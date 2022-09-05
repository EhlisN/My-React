import { UserActionType, UserState, UsersAction } from "../types/user";

const initialState: UserState = {
    users: []
}

export const userReducer = (state = initialState, action: UsersAction) : UserState => {
    switch (action.type) {
        case UserActionType.GET_USERS:
            return {users: action.payload};
        default:
            return state;
    }
}