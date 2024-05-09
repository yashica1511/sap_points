import { useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import Signin from './components/signin/Signin';
import Personalinfo from './components/student/Personalinfo';
import AddUsersFromCSV from './components/adduser/admin';
import { StudentProvider, StudentContext } from './context/StudentContext';
import Staff_1 from './components/staff/Staff_1';
function App() {
  return (
    <StudentProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/personalinfo' element={<Personalinfo />} />
          <Route path='/admin' element={<AddUsersFromCSV/>}/>
          <Route path='/Staff_1' element={<Staff_1/>}/>
        </Routes>
      </BrowserRouter>
    </StudentProvider>
  );
}


export default App;

