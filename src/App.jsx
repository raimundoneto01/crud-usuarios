import { Outlet } from "react-router-dom";
import { NavBar } from "./components/navbar/NavBar";

export default function App() {
  return (
    <div className="w-full h-screen bg-slate-900 overflow-y-scroll  ">
      <NavBar />
      <div className=" sm:bg-slate-900 md:bg-slate-900 text-white px-5">
        <Outlet />
      </div>
    </div>
  );
}
