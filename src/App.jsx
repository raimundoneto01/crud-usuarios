
import { Outlet } from 'react-router-dom';

import { NavBar } from './components/navbar/NavBar';

function App() {


  return (
    <div className='w-full h-dvh m-0 p-0 bg-slate-800'>
        <NavBar/>
      <div className='w-full h-vh text-white m-5 px-5'>
        <Outlet/>
      </div>
    </div>
  )
}

export default App
