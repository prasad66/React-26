import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';
import AddStudent from './components/AddUser';
import EditStudent from './components/EditUser';
import AllStudents from './components/AllUsers';
import UserProfile from './components/UserProfile';

export const StudentContext = React.createContext();

function App() {

  let [data, setData] = useState([
    {
      name: "Raj",
      mobile: "7095542322",
      email: "raj@gmail.com",
      grad: "B.E",
      department: "MECH",
    },
    {
      name: "Ram",
      mobile: "56235363322",
      email: "ram@gmail.com",
      grad: "B.E",
      department: "EEE",
    },
  ])



  const data1 = { earning: "10,000", annual: "215,000", tasks: "40", pending: "12" }
  return (
    <Router>
      <StudentContext.Provider value={{ data, setData }}>
        <div style={{ display: "flex", gridTemplateColumns: "15% 85%" }}>
          <div>
            <SideBar />
          </div>
          <div className="w-100">
            <Routes>
              <Route path='/dashboard' element={<Dashboard value={data1} />} />
              <Route path='/create-user' element={<AddStudent />} />
              <Route path='/edit-user/:id' element={<EditStudent />} />
              <Route path='/users' element={<AllStudents />} />
              <Route path='/profile/:id' element={<UserProfile />} />
              <Route path='/' element={<Dashboard value={data1} />} />
            </Routes>
          </div>
        </div>
      </StudentContext.Provider>
    </Router>
  );
}

export default App;
