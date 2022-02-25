import React from 'react';

const User = ({ onChange, user }) => {
    return <>
        <h2>Hello {user?.name}</h2>
        <button onClick={() => onChange(user)}>Change</button>
    </>
}

export default User