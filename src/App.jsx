import { useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import Signin from './components/signin/Signin';
import Personalinfo from './components/student/Personalinfo';
import AddUsersFromCSV from './components/adduser/admin';
import { StudentProvider, StudentContext } from './context/StudentContext';
import Staff_1 from './components/staff/Staff_1';
import Staff_2 from './components/staff/Staff_2';
import Staff_3 from './components/staff/Staff_3';
import Admin_1 from './components/adduser/admin_1';
import Admin_2 from './components/adduser/admin_2';
import Admin_3 from './components/adduser/admin_3';
import Admin_4 from './components/adduser/admin_4';
import Staff_4 from './components/staff/Staff_4';
import Staff_5 from './components/staff/Staff_5';
function App() {
  return (
    <StudentProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/personalinfo' element={<Personalinfo />} />
          <Route path='/admin' element={<AddUsersFromCSV/>}/>
          <Route path='/Staff_1' element={<Staff_1/>}/>
          <Route path='/Staff_2' element={<Staff_2/>}/>
          <Route path='/Staff_3' element={<Staff_3/>}/>
          <Route path='/Staff_4' element={<Staff_4/>}/>
          <Route path='/Staff_5' element={<Staff_5/>}/>
          <Route path='/Admin_1' element={<Admin_1/>}/>
          <Route path='/Admin_2' element={<Admin_2/>}/>
          <Route path='/Admin_3' element={<Admin_3/>}/>
          <Route path='/Admin_4' element={<Admin_4/>}/> 
          <Route path='/Student_1' element={<Student_1/>}/>
          <Route path='/Student_2' element={<Student_2/>}/>
          <Route path='/Student_3' element={<Student_3/>}/>

        </Routes>
      </BrowserRouter>
    </StudentProvider>
  );
}


export default App;

