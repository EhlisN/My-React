import { UserActionType, UserState, UsersAction } from "../types/user";

const initialState: UserState = {
    users: [],
    status: 0,
    userId: 0
}

export const userReducer = (state = initialState, action: UsersAction) : UserState => {
    switch (action.type) {
        case UserActionType.GET_USERS:
            return {users: action.payload};
        case UserActionType.DELETE_USER:
            const users = state.users.filter(user => user.id !== state.userId);
            return {users: state.users, status: action.payload};
        default:
            return state;
    }
}
