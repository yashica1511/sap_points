import { useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import Signin from './components/signin/Signin';
import Personalinfo from './components/student/Personalinfo';
import AddUsersFromCSV from './components/adduser/admin';
import { StudentProvider, StudentContext } from './context/StudentContext';

function App() {
  return (
    <StudentProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/personalinfo' element={<Personalinfo />} />
          <Route path='/admin' element={<AddUsersFromCSV/>}/>
        </Routes>
      </BrowserRouter>
    </StudentProvider>
  );
}


export default App;

