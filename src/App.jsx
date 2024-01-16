
import { Outlet } from 'react-router-dom';
import { NavBar } from './components/navbar/NavBar';

export default function App() {

  return (
    <div className='w-screen h-screen bg-slate-800 md:bg-slate-800 sm:slate-800 overflow-y-scroll '>
        <NavBar/>
      <div className='w-full h-full sm:bg-slate-800 md:bg-slate-800 text-white m-5 px-5'>
        <Outlet/>
      </div>
    </div>
  )
}

 
