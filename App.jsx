import React, { useEffect, useState } from 'react';
import Header from './src/components/Header';
import { Outlet } from 'react-router-dom';
import UserContext from './src/utils/UserContext';

const App = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Harsh Jha",
    };
    setUserName( data.name );
  }, []);

  return (
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
      <div className='app'>
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

export default App;
