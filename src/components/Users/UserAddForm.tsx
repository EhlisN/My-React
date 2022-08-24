import React, {
  Dispatch,
  SetStateAction,
  ChangeEvent,
  FormEvent,
  useState,
} from 'react';
import { IUser } from './IUser';
import { initialUser } from './initialUser';
import http from '../../http';

const UserAddForm = ({
  setUsers,
  users,
}: {
  setUsers: Dispatch<SetStateAction<IUser[]>>;
  users: IUser[];
}) => {
  const [user, setUser] = useState(initialUser);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const field = event.target.id;
    setUser({ ...user, [field]: event.target.value });
  };

  const addUser = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const addedUser = await http.post('users', user);
      if (addedUser.data) {
        setUsers([...users, user]);
        setUser(initialUser);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={(event) => addUser(event)}>
      {Object.keys(user).map((field) => {
        if (field === 'id' || field === 'address' || field === 'company')
          return null;
        // if(field === 'address') return <AddressForm />
        return (
          <div className='mb-3' key={field}>
            <label htmlFor={field} className='form-label'>
              {field}
            </label>
            <input
              type='text'
              className='form-control'
              id={field}
              required
              value={
                user[field as keyof Omit<IUser, 'id' | 'address' | 'company'>]
              }
              onChange={(event) => onChange(event)}
            />
          </div>
        );
      })}

      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default UserAddForm;
