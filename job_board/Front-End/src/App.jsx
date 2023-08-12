
import { useState } from 'react'

import './App.css'


import Router from './router/routes/Router';
import publicRoute from './router/routes/publicRoutes';

function App() {

    const [allRoutes, setAllRoutes] = useState([...publicRoute])
    console.log(allRoutes)
  return (
    <>
     <Router allRoutes={[allRoutes]} />

    </>
  )
}

export default App
