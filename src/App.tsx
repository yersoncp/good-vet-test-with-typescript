import React from 'react';
import User from './components/User';
import { IUser } from './interfaces/user.interface';

function App() {

  const user: IUser = {
    id: 1,
    name: 'John',
    email: 'jhon@genium.io'
  }

  return (
    <div className="App">
      <User user={user} onChange={(v) => { console.log(v) }} />
    </div>
  );
}

export default App;
