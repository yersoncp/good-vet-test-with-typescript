import React, { useEffect } from 'react';
import { findUserById } from './api/user.service';
import User from './components/User';
import { IUser } from './interfaces/user.interface';

function App() {

  const [user, setUser] = React.useState<IUser | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await findUserById(1);
      setUser(user);
    }
    fetchUser();
  }, []);

  return (
    <div className="App">
      {
        user && <User user={user} onChange={(v) => { console.log(v) }} />
      }
    </div>
  );
}

export default App;
