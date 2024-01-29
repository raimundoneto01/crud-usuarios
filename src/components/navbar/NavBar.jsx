import { Link } from "react-router-dom";
export function NavBar() {
  return (
    <nav className="max-w-screen h-16 px-10 py-2 text-3xl
     font-semibold text-emerald-300 
     justify-between bg-red-500 flex ">
      <h1 className="hover:text-emerald-700">
        <Link to={`/`}>Lista</Link>
      </h1>
      <ul className="flex space-x-5 text-xl text-yellow-400">
        <li className="hover:text-yellow-200">
          <Link to={`/`}>Mas Informações</Link>
        </li>
        <li className="hover:text-yellow-200">
          <Link to={`/cadastro`}>Sobre</Link>
        </li>
        
      </ul>
    </nav>
  );
}
