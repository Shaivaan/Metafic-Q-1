import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Asteroid } from '../components/asteroid'
import { Form } from '../components/form'

export const  Router=() =>{
  return (
    <div>
      <Routes>
        <Route path='/' element= {<Form/>}/>
        <Route path='/asteroid/:id'  element={<Asteroid/>}/>
      </Routes>
    </div>
  )
}


