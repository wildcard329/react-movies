import React from 'react'
import './App.css'
import AppLayout from './AppLayout'
import AppRouter from './AppRouter'

const App = () =>
  <div className='app'>
    <AppLayout>
      <AppRouter />
    </AppLayout>
  </div>

export default App
