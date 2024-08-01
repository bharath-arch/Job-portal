import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home'
import Main from './components/Home/Main';
import CreateAccount from './components/create-account/CreateAccount';
import Login from './components/Login/Login';
import Layout from './components/Main/Layout';
import AdminLayout from './components/Admin/layout/AdminLayout';
import Content from './components/Main/Content';
import AddJobsForm from './components/Admin/layout/AddJobsForm';
import AdminMain from './components/Admin/AdminMain';
import ApplicationStatue from './components/Main/ApplicationStatue';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Main />} />
           
            {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
          </Route>

          <Route path="create-account" element={<CreateAccount />} />
          <Route path="login" element={<Login />} />


          <Route path="layout" element={<Layout />} >
            <Route path="" element={<Content />} />
            <Route path="application-status" element={<ApplicationStatue />} />
          </Route>

          <Route path="admin" element={<AdminLayout />} >

            <Route index element={<AdminMain />}></Route>
            <Route path="addjobs" element={<AddJobsForm />} />
          </Route>



        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
