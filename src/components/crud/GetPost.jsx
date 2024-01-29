import { useGetLista } from "./../crud/useGetLista";

export function GetPost(){

const {handleCadastro} = useGetLista()

  return(
    <div className="h-screen flex flex-col items-center mt-10 px-5 py-10 bg-emerald-400">
      
          <h1 className="text-zinc-300 tracking-widest py-5 text-xl">
            Preencha com seus Dados
          </h1>
      <div className="border border-gray-400 bg-emerald-500 rounded-xl p-2">
          <form className="flex flex-col space-y-5 "
           onSubmit={handleCadastro} >
            <input className="w-72 h-16 text-2xl text-gray-500 px-3 bg-emerald-300 rounded-xl focus:outline-none"           
              type="text"
              id="name"
              name="name"
              placeholder="Nome:"
            />
            <input className="w-72 h-16 text-2xl text-gray-500 px-3 bg-emerald-300 rounded-xl focus:outline-none"         
              type="text"
              id="sobrenome"
              name="sobrenome"
              placeholder="Sobrenome"
            />
            <input className="w-72 h-16 text-2xl text-gray-500 px-3 bg-emerald-300 rounded-xl focus:outline-none"        
              type="tel"
              id="phone"
              name="phone"
              maxLength={11}
              placeholder="(00)0 0000 0000"
            />
            <input className="w-72 h-16 text-2xl text-gray-500 px-3 bg-emerald-300 rounded-xl focus:outline-none"     
              type="text"
              id="cidade"
              name="cidade"
              placeholder="Cidade"
            />
            <input className="w-72 h-16 text-2xl text-gray-500 px-3 bg-emerald-300 rounded-xl focus:outline-none"       
              type="text"
              id="estado"
              name="estado"
              placeholder="Estado"
            />
            <button className="py-2 bg-lime-400 text-xl text-gray-500 font-bold tracking-wider rounded-full hover:bg-lime-600 hover:text-white">
              Cadastrar
            </button>
          </form>
        </div>
    </div>
  )
}