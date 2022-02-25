import React from 'react';
import { FC } from 'react';
import { IUser } from '../interfaces/user.interface';

type IProps = {
    user: IUser,
    onChange: (value: IUser) => void,
}

const SearchFilter: FC<IProps> = ({ onChange, user }) => {
    return <>
        <h2>Hello {user?.name}</h2>
        <button onClick={() => onChange(user)}>Change</button>
    </>
}

export default SearchFilter
