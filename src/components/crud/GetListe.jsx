import { useGetLista } from "./../crud/useGetLista";


export function GetListe() {
 const { id, form, list, handleForm, FormEditar, Editar, DeletarItems, handleCadastro } = useGetLista()

  return (
    <div className="w-full h-screen md:bg-slate-800 sm:bg-slate-900 text-sm px-2 ">
      <h1 className="text-2xl text-orange-400 px-2">Project/Mockapi.io/
       <span className="text-base text-zinc-400 font-serif">Usuários</span>
       </h1>
      <div className=" w-full h-full overflow-x-scroll bg-slate-800 sm:bg-slate-800 flex flex-col md:flex-row justify-around">
        <div className="w-96 h-96 bg-slate-800 border border-gray-500 hover:border-gray-400 rounded-xl overflow-y-scroll mt-10 px-5 py-2">
          {list.length === 0 ? (
            <p>Lista vazia...</p>
          ) : (
            list.map((list) => (
              <ol
                key={list.id}
                className=" px-3 py-4 text-sm border border-gray-600 rounded-l-2xl font-bold"
              >
                <li>
                  NOME :{" "}
                  {id === list.id ? (
                    <input
                      className="w-28 bg-transparent border-b px-2 tracking-widest text-sm text-orange-400"
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleForm}
                    />
                  ) : (
                    list.name
                  )}{" "}
                </li>
                <li>
                  SOBRE-NOME :{" "}
                  {id === list.id ? (
                    <input
                      className="w-32 bg-transparent border-b px-2 tracking-widest text-sm text-orange-400"
                      type="text"
                      id="sobrenome"
                      name="sobrenome"
                      value={form.sobrenome}
                      onChange={handleForm}
                    />
                  ) : (
                    list.sobrenome
                  )}{" "}
                </li>
                <li>
                  TELEFONE :{" "}
                  {id === list.id ? (
                    <input
                      className="w-24 bg-transparent border-b px-2 tracking-widest text-sm text-orange-400"
                      type="number"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleForm}
                    />
                  ) : (
                    list.phone
                  )}{" "}
                </li>
                <li>
                  CIDADE :{" "}
                  {id === list.id ? (
                    <input
                      className="w-32 bg-transparent border-b px-2 tracking-widest text-sm text-orange-400"
                      type="text"
                      id="cidade"
                      name="cidade"
                      value={form.cidade}
                      onChange={handleForm}
                    />
                  ) : (
                    list.cidade
                  )}{" "}
                </li>
                <li>
                  ESTADO :{" "}
                  {id === list.id ? (
                    <input
                      className="w-28 bg-transparent border-b px-2 tracking-widest text-sm text-orange-400"
                      type="text"
                      id="estado"
                      name="estado"
                      value={form.estado}
                      onChange={handleForm}
                    />
                  ) : (
                    list.estado
                  )}{" "}
                </li>
                <li>
                  {id === list.id ? (
                    <button
                      onClick={() => FormEditar(list.id)}
                      className="w-14 h-6 text-base font-bold border
                       border-green-200 rounded hover:border-green-500
                      hover:bg-green-600 focus:text-gray-400"
                    >
                      Salvar
                    </button>
                  ) : (
                    <button
                      onClick={() => Editar(list)}
                      className="w-14 h-6 text-base font-bold border
                       border-yellow-200 rounded hover:border-yellow-500
                      hover:bg-yellow-600 focus:text-gray-400"
                    >
                      Editar
                    </button>
                  )}
                  <button
                    onClick={() => DeletarItems(list.id)}
                    className="w-14 h-6 text-base font-bold border
                     border-red-500 rounded hover:border-red-700
                    hover:bg-red-600 focus:text-gray-400"
                  >
                    Excluir
                  </button>
                </li>
              </ol>
            ))
          )}
        </div>

        <div className="w-96  h-96 bg-slate-800  text-sm border border-gray-700 hover:border-gray-500 rounded-xl shadow-lg mt-10 px-5 py-2  ">
          <h1 className="text-center text-xl text-gray-300 shadow py-3 font-bold ">
            Preencha seus dados
          </h1>
          <form onSubmit={handleCadastro} className="flex flex-col space-y-3  ">
            <input
              className="w-60 h-10 ml-10 bg-transparent border-b 
             border-gray-500 px-3 text-lg tracking-wider text-gray-200 hover:placeholder:text-gray-200
            focus:outline-none focus:border-white  rounded"
              type="text"
              id="name"
              name="name"
              placeholder="Nome:"
            />
            <input
              className="w-60 h-10 ml-10 bg-transparent border-b 
             border-gray-500 px-3 text-lg tracking-wider text-gray-200  hover:placeholder:text-gray-300
            focus:outline-none focus:border-white  rounded"
              type="text"
              id="sobrenome"
              name="sobrenome"
              placeholder="Sobrenome"
            />
            <input
              className="w-60 h-10 ml-10 bg-transparent border-b 
             border-gray-500 px-3 text-lg tracking-wider text-gray-200 hover:placeholder:text-gray-200
            focus:outline-none focus:border-white  rounded"
              type="tel"
              id="phone"
              name="phone"
              maxLength={11}
              placeholder="(00)0 0000 0000"
            />
            <input
              className="w-60 h-10 ml-10 bg-transparent border-b 
             border-gray-500 px-3 text-lg tracking-wider text-gray-200 hover:placeholder:text-gray-200
            focus:outline-none focus:border-white  rounded"
              type="text"
              id="cidade"
              name="cidade"
              placeholder="Cidade"
            />
            <input
              className="w-60 h-10 ml-10 bg-transparent border-b 
             border-gray-500 px-3 text-lg tracking-wider text-gray-200 hover:placeholder:text-gray-200
            focus:outline-none focus:border-white  rounded"
              type="text"
              id="estado"
              name="estado"
              placeholder="Estado"
            />
            <button
              className="w-32 ml-28 rounded-xl py-1.5 text-2xl
               text-gray-400 hover:border focus:bg-gray-300
                focus:text-gray-900 focus:shadow-md "
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
