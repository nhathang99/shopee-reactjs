import React from 'react'
import 'normalize.css'
import './assets/styles/global.scss'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { path } from './constants/path'
import Home from './pages/Home/Home'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
import NotFound from './pages/NotFound/NotFound'
import RegisterLayout from './Layouts/RegisterLayout'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={path.home} exact element={<Home />} />
        <Route
          path={path.login}
          element={
            <RegisterLayout title="Đăng nhập">
              <Login />
            </RegisterLayout>
          }
        />
        <Route
          path={path.register}
          element={
            <RegisterLayout title="Đăng ký">
              <Register />
            </RegisterLayout>
          }
        />
        <Route path={path.notFound} element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
