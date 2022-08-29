import React, { FC, useState, useEffect } from 'react';
import { IUser } from '../components/Users/IUser';
import UserCards from '../components/Users/UserCards';
import UserAddForm from '../components/Users/UserAddForm';
import Search from '../components/Search/Search';
import { useSearch } from '../hooks/useSearch';
import http from '../https/http';

const Users: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [showUserForm, setShowUserForm] = useState(false);
  const [search, setSearch] = useState('');
  const searchedUsers = useSearch(users, 'name', search);

  useEffect(() => {
    getUsers();
  }, []);

  //   if deps not used rerender on every change state
  //   if deps empty - rerender first loading
  //   if deps state - rerender onchange this state
  //   if in useEffect used return - unmount

  const getUsers = async () => {
    console.log('start');
    try {
      const users = await http.get('users');
      setUsers(users.data);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteUser = async (id: number) => {
    const isDelete = window.confirm('Do you really delete this user?');
    if (isDelete) {
      try {
        const deletedUser = await http.delete(`users/${id}`);
        if (deletedUser) {
          setUsers(users.filter((user) => user.id !== id));
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <>
      <Search setSearch={setSearch} name={'Username'} />
      <button
        className='btn btn-success mt-3 mb-3'
        onClick={() => setShowUserForm(!showUserForm)}
      >
        Add new User
      </button>
      {showUserForm && <UserAddForm setUsers={setUsers} users={users} />}
      <UserCards users={searchedUsers} deleteUser={deleteUser} />
    </>
  );
};

export default Users;
