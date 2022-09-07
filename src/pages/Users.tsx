import React, { FC, useState, useEffect } from 'react';
import UserCards from '../components/Users/UserCards';
import UserAddForm from '../components/Users/UserAddForm';
import Search from '../components/Search/Search';
import { useSearch } from '../hooks/useSearch';
import { useAction } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelectors';

const Users: FC = () => {
  const { users } = useTypedSelector((state) => state.users);
  const [showUserForm, setShowUserForm] = useState(false);
  const [search, setSearch] = useState('');
  const searchedUsers = useSearch(users, 'name', search);
  const { getUsers } = useAction();

  useEffect(() => {
    getUsers();
  }, []);

  //   if deps not used rerender on every change state
  //   if deps empty - rerender first loading
  //   if deps state - rerender onchange this state
  //   if in useEffect used return - unmount

  return (
    <>
      <Search setSearch={setSearch} name={'Username'} />
      <button
        className='btn btn-success mt-3 mb-3'
        onClick={() => setShowUserForm(!showUserForm)}
      >
        Add new User
      </button>
      {/* {showUserForm && <UserAddForm setUsers={setUsers} users={users} />} */}
      <UserCards />
    </>
  );
};

export default Users;
