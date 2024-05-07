import React, { createContext, useState } from 'react';

const StudentContext = createContext();

const StudentProvider = ({ children }) => {
    const [Authenticated, setAuthenticated] = useState(false);
    const [student, setStudent] = useState("");
    const [Email, setEmail] = useState("");

    const contextValue = {
        Authenticated,
        setAuthenticated,
        student,
        setStudent,
        Email,
        setEmail
    };

    return (
        <StudentContext.Provider value={contextValue}>
            {children}
        </StudentContext.Provider>
    );
};

export { StudentContext, StudentProvider };