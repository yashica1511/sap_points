import React, { createContext, useState } from 'react';

const StudentContext = createContext();

const StudentProvider = ({ children }) => {
    const [Authenticated, setAuthenticated] = useState(false);
    const [student, setStudent] = useState("");
    const [Email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [rollno, setRollno] = useState("");
    const [year,setYear] = useState("");
    const [dept,setDept] = useState("");
    const [section,setSection] = useState("");
    const contextValue = {Authenticated, setAuthenticated,student, setStudent,name, setName,rollno, setRollno, Email, setEmail, year, setYear,dept,setDept,section,setSection};

    return (
        <StudentContext.Provider value={contextValue}>
            {children}
        </StudentContext.Provider>
    );
};

export { StudentContext, StudentProvider };