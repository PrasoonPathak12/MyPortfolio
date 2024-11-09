import React, { useState } from 'react';
import Header from './Components/Header.jsx'
import Navigation from './Components/Navigation.jsx'
import './App.css'
import Login from './Admin/Login.jsx';
import Admin from './Components/Admin.jsx';
import AdminLogin from './Components/AdminLogin.jsx';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
// import ProjectEdit from './Admin/ProjectEdit.jsx';



function App() {

  const [authenticated,setAuthenticated] = useState(false);
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element:<>
        <AdminLogin />
        <Header /> 
        <Navigation /> 
        </> 
      },
      {
        path : 'admin',
        element :authenticated ? <Admin setAuthenticated={setAuthenticated}/> : <Login setAuthenticated={setAuthenticated}/> 
      }
    ]
  )

  return (
    <div className='bedsheet'>
      <RouterProvider router={router}/>
    </div>
    
  );
}

export default App
