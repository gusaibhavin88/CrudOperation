import React from 'react';
import Navbar from './components/navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import EditUser from './components/editUser';
import Userlists from './components/Userlists';
import AddUser from './components/addUser';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Userlists />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
