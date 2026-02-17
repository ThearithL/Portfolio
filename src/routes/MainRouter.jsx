import React from 'react'
import { Routes } from 'react-router'

export default function MainRouter() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
        </Routes>

    </div>
  )
}
