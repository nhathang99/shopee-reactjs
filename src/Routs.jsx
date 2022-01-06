import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { path } from './constants/path'
import Home from './pages/Home/Home'
import Login from './pages/Auth/Login/Login'

export default function Routs() {
  return (
    <Routes>
      <Route path={path.home} exact>
        <Home />
      </Route>
      <Route path={path.login}>
        <Login />
      </Route>
    </Routes>
  )
}
