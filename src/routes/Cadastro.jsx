import { GetGerenciar } from '../components/crud/GetGerenciar';

export function Cadastro(){
  return(
    <div className='h-screen bg-emerald-400 text-center overflow-y-scroll'>
      <GetGerenciar/>
    </div>
  )
}