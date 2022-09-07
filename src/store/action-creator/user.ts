import { Dispatch } from 'redux';
import http from '../../https/http';
import { UserActionType, UsersAction } from '../types/user';

export const getUsers = () => {
  return async (dispatch: Dispatch<UsersAction>) => {
    const response = await http.get('users');
    dispatch({ type: UserActionType.GET_USERS, payload: response.data });
  };
};

export const deleteUser = (id: number) => {
  return async (dispatch: Dispatch<UsersAction>) => {
    const isDelete = window.confirm('Do you really delete this user?');
    if (isDelete) {
      const response = await http.delete(`users/${id}`);
      if (response.status === 200) {
        dispatch({ type: UserActionType.DELETE_USER, payload: { id: id } });
      }
    }
  };
};
