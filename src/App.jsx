import { Outlet } from "react-router-dom";
import { NavBar } from "./components/navbar/NavBar";

export default function App() {
  return (
    <div className="w-screen overflow-auto">
      <NavBar />
      <div >
        <Outlet />
      </div>
    </div>
  );
}
