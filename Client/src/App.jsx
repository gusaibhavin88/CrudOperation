import React, { useEffect } from 'react';
import Navbar from './components/navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import EditUser from './components/editUser';
import Userlists from './components/Userlists';
import AddUser from './components/addUser';
import { MyContextProvider } from './components/myContext';

const App = () => {



  return (
    <div>
      <BrowserRouter>
        <MyContextProvider>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Userlists />} />
            <Route path="/adduser" element={<AddUser />} />
            <Route path="/edit/:id" element={<EditUser />} />
          </Routes>

        </MyContextProvider>
      </BrowserRouter>

    </div>
  );
};

export default App;
