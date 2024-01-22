import { Link } from "react-router-dom";
export function NavBar() {
  return (
    <nav className="md:flex md:flex-row sm:flex-col sm:py-3 justify-between bg-slate-900 py-6 px-10">
      <h1 className="text-gray-200 text-4xl font-mono">
        <Link to={`/`}>Lista</Link>
      </h1>
      <ul className="md:flex md:space-x-8 text-gray-400  text-lg py-3 ">
        <li className="hover:text-white">
          <Link to={`/`}>Home</Link>
        </li>
        <li className="w-28 h-8 text-center font-bold bg-transparent border border-gray-400 hover:border-white rounded-xl bg-red-100 hover:text-white ">
          <Link to={`/cadastro`}>Nova Lista</Link>
        </li>
        <li className="hover:text-white">
          <Link to={`/gerenciamento`}>Gerenciar Lista</Link>
        </li>
      </ul>
    </nav>
  );
}
