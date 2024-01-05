import { NavLink, RouterProvider, createBrowserRouter, useRouteError } from "react-router-dom";
import Home from "./component/pages/home";
import Apropos from "./component/pages/A-propos";
import PageError from "./component/pages/errorPage";
import { BiHomeAlt2 } from "react-icons/bi";
import { GrProjects } from "react-icons/gr";


const router = createBrowserRouter([
  {
    path:'/',
    element: <div>
        <Navbar/>
        <div>
          <Home/>
        </div>
      </div> ,
    errorElement : <PageError/>
  },{
    path: "/apropos",
    element : <div>
        <Navbar/>
        <div>
          <Apropos/>
        </div>
      </div>
  }
])


function App(){
  return <RouterProvider router={router} />
}

function Navbar(){
  return <>
    <header className="bg-white w-full fixed h-20 items-center justify-around flex gap-10 z-40 ">
      <div className="w-8 h-8 text-center font-bold flex justify-center items-center border rounded-full">Afer</div>
      <nav className="max-sm:hidden flex flex-row gap-10 items-center ">
        <NavLink to="/" className="navlink"><BiHomeAlt2 /> Accueil </NavLink>
        <NavLink to="/apropos" className="navlink"><GrProjects /> A propos</NavLink>
      </nav>      
      {/* <div className="slider"></div> */}
    </header>
  </>
}



export default App