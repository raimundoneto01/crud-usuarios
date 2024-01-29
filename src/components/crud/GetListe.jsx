import { useGetLista } from "./../crud/useGetLista";



export function GetListe() {
 const { id, form, list, handleForm, FormEditar, Editar, DeletarItems, NaviForm } = useGetLista()

 


  return (
    <div className="flex flex-col px-10 py-10 bg-emerald-400">
      <h1 className="text-2xl text-orange-200 ">Project/Mockapi.io/
       <span className="text-white underline">Usuários</span>
       </h1>
      
        <div className="flex flex-col justify-center gap-10 py-10">
        <div>
            <button onClick={NaviForm}
             className="px-3 py-2 border-2 border-orange-300 hover:border-orange-500
             text-orange-100  hover:bg-orange-500 font-mono text-lg rounded-full">Novo Usuário</button>
          </div>
          <div className="w-full space-y-7 rounded overflow-y-scroll">
            {list.length === 0 ? (
               <p>Lista vazia...</p>
                ) : (
                     list.map((list) => (
              <ol className=" px-3 py-2 border border-gray-400 hover:border-gray-300 hover:shadow-2xl rounded  text-slate-800" key={list.id}>
                <li className="flex">
                  NOME :{" "}
                  {id === list.id ? (
                    <input   className="bg-transparent border-b px-4 rounded text-lg
                     text-gray-200 tracking-wide focus:outline-none"                
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleForm}
                    />
                  ) : (
                    <p className="text-red-600 text-lg font-mono px-5">{list.name} </p>
                    
                  )}{" "}
                </li>
                <li className="flex">
                  SOBRE-NOME :{" "}
                  {id === list.id ? (
                    <input  className="bg-transparent border-b px-4 rounded text-lg
                    text-gray-200 tracking-wide focus:outline-none"                      
                      type="text"
                      id="sobrenome"
                      name="sobrenome"
                      value={form.sobrenome}
                      onChange={handleForm}
                    />
                  ) : (
                    <p className="text-red-600 text-lg font-mono px-5">{list.sobrenome} </p>
                  )}{" "}
                </li>
                <li className="flex">
                  TELEFONE :{" "}
                  {id === list.id ? (
                    <input className="bg-transparent border-b px-4 rounded text-lg
                    text-gray-200 tracking-wide focus:outline-none"                    
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleForm}
                    />
                  ) : (
                    <p className="text-red-600 text-lg font-mono px-5">{list.phone} </p>
                  )}{" "}
                </li>
                <li className="flex">
                  CIDADE :{" "}
                  {id === list.id ? (
                    <input className="bg-transparent border-b px-4 rounded text-lg
                    text-gray-200 tracking-wide focus:outline-none"                     
                      type="text"
                      id="cidade"
                      name="cidade"
                      value={form.cidade}
                      onChange={handleForm}
                    />
                  ) : (
                    <p className="text-red-600 text-lg font-mono px-5">{list.phone} </p>
                  )}{" "}
                </li>
                <li className="flex">
                  ESTADO :{" "}
                  {id === list.id ? (
                    <input className="bg-transparent border-b px-4 rounded text-lg
                    text-gray-200 tracking-wide focus:outline-none"                     
                      id="estado"
                      name="estado"
                      value={form.estado}
                      onChange={handleForm}
                    />
                  ) : (
                    <p className="text-red-600 text-lg font-mono px-5">{list.estado} </p>
                  )}{" "}
                </li>
                <li>
                  {id === list.id ? (
                    <button className="px-3 ml-2 bg-blue-400 text-lg font-semibold rounded
                    hover:text-white hover:bg-blue-600"
                      onClick={() => FormEditar(list.id)}>
                      Salvar
                    </button>
                  ) : (
                    <button className="px-3 bg-yellow-300 text-lg font-semibold rounded
                     hover:text-white hover:bg-yellow-500"
                      onClick={() => Editar(list)} >
                      Editar
                    </button>
                  )}
                  <button className="px-3 ml-2 bg-red-400 text-lg font-semibold rounded
                     hover:text-white hover:bg-red-600"
                    onClick={() => DeletarItems(list.id)}>
                    Excluir
                  </button>
                </li>
              </ol>
                   ))
                )}
          </div>
          
        </div>
      </div>
   
  );
}
