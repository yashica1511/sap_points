import React, { useContext, useEffect, useState } from 'react';
import Papa from 'papaparse';
import supabase from '../../database/Client';
import MainPage from '../../Mainpage';
import { StudentContext } from '../../context/StudentContext';
import { useNavigate } from 'react-router-dom'
const AddUsersFromCSV = () => {
  const navigate = useNavigate();
  const {Authenticated, setAuthenticated,student, setStudent,name, setName,rollno, setRollno, Email, setEmail}= useContext(StudentContext);
  useEffect(() => {
    if (!Authenticated) {
      navigate('/');
    }
  });
  const [csvData, setCsvData] = useState('');
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setCsvData(event.target.result);
    };

    reader.readAsText(file);
  };

  const handleAddUsers = async () => {
    try {
      const parsedData = Papa.parse(csvData, { header: true });
      for (const row of parsedData.data) {
        const { email, password } = row;
        const { user, error } = await supabase.auth.signUp({ email, password });

        if (error) {
          console.error('Error adding user:', error.message);
        } else {
          console.log('User added successfully:', user);
        }
      }
    } catch (error) {
      console.error('Error adding users:', error.message);
    }
  };

  return (
    <div>
      <MainPage />
      <form>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleAddUsers}>Add Users</button></form>
    </div>
  );
};

export default AddUsersFromCSV;
