import React, { Component } from 'react'
import { Route, Routes, useRoutes } from 'react-router-dom'
import routes from './routes'
import { Button, Divider } from 'antd'

export default function App() {

  const element = useRoutes(routes)
  return (
    <div className='app'>{element}
      {/* <Button type='primary'>安娜苏</Button> */}
      {/* <Routes>

        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<Admin />} />
      </Routes> */}</div>
  )
}

