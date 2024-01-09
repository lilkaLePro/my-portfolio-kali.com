import { NavLink, Route, RouterProvider, createBrowserRouter, useRouteError } from "react-router-dom";
import Home from "./component/pages/home";
import Apropos from "./component/pages/A-propos";
import PageError from "./component/pages/errorPage";
import { BiHomeAlt2 } from "react-icons/bi";
import { GrProjects } from "react-icons/gr";
import { useState } from "react";
// import Reseau from "./component/comp/reseaux";


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
  const [showbar , setshowbar] = useState(false)
  const handleShowNavbar = () => setshowbar(!showbar)

  return <div>

    <header className=" w-full fixed h-20 items-center justify-around max-sm:justify-between flex z-40 max-sm:shadow-sm " >
      <div className="w-8 h-8 text-center font-bold flex justify-center items-center border rounded-full">Afer</div>

      <div className={`navEl ${showbar && 'toggle'}`}>
        <nav className="nav flex flex-row gap-10 items-center">
          <NavLink onClick={handleShowNavbar} to="/" className="navlink"><BiHomeAlt2 /> accueil </NavLink>
          <NavLink onClick={handleShowNavbar} to="/apropos" className="navlink"><GrProjects /> à propos</NavLink>
        </nav>  
      </div>    
      <div className=" max-sm:inline-block hidden  w-10 h-10 text-center text-lg cursor-pointer hover:bg-white-bg"
      onClick={handleShowNavbar} >=</div>
      
    </header>
  </div>
}



export default App