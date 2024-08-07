import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Authentication from '../Pages/Authentication/index.jsx'
import Dashboard from '../Pages/Dashboard/index.jsx'
import Error404Page from '../Error/Error404Page.jsx'

function MainRoutes() {
  return (
    <div style ={{minheight:'100vh' , minwidth:"100vw"}}>
    <Routes>
      <Route path='' element={<Authentication />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='*' element={<Error404Page/>}></Route>
    </Routes>
    </div>
  )
}

export default MainRoutes
