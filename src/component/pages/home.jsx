import Card from "../comp/Card.jsx"
import Button from "../comp/button.jsx"
import { IoIosCall } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { FaCode } from "react-icons/fa6";
import Reseau from "../comp/reseaux.jsx";
import { Link } from "react-router-dom";

export default function Home(){

    return <div className="flex flex-col justify-center items-center w-full ">
    <div>

      <div className="md:max-w-6xl w-full max-sm:flex-col flex mt-24 max-sm:items-center">
      <div className="max-md:text-center">
        <h1 className="sm:pr-5 max-md:text-lg max-sm:text-lg text-color-base text-xl font-extrabold leading-md ">Front-End React & <br /> Web Designer </h1>
        <p className="text-sous-text ">
          <span>localisation : </span>
          <span>Kaly diallo  </span>
        </p>
        <p className="text-sous-text w-full mt-10 flex flex-row gap-2 max-xm:m-0 max-lg:flex-col font-semibold items-center">Voulez vous me dire quelque chose ? 
          <Link to="#contact" id="contact"> <Button value={"me contacter"}><IoIosCall /> </Button>  </Link>
        </p>

      {/* <div className="absolute border w-80 h-80 rounded-full bg-ligh-yel "> </div> */}
      {/* <div className="absolute border w-80 h-80 rounded-full bg-light-green top-20 "> </div> */}

      </div>

      <div className="flex flex-col items-center ">
        <div className="Pprofil w-64 max-md:w-44 m-5 rounded-full shadow-md overflow-hidden ">
          <img src="/img/PP-kali.jpg"className="w-full h-full" alt="photo de profile" />
          </div>
        <div className="flex gap-10 ">
        <div className=" cursor-pointer "><a href="https://github.com/lilkaLePro"  
          className="w-5 h-5 hover:-translate-y-1 transition-all  rounded-full overflow-hidden "><FaGithub className="w-full h-full" /> </a> github</div>
        <div className="cursor-pointer"><a href="https://linkedin.com/in/kaly-diallo-0087032a3"
        className="w-5 h-5 hover:-translate-y-1 transition-all  rounded-full overflow-hidden"><FaLinkedin className="w-full h-full"/> </a> linkedin</div>
       </div>   
      </div>      
      </div>

      <div className="w-full mb-20 flex flex-col  items-center  justify-center py-5 px-40 ">
        <h1 className="text-xd text-color-base font-extrabold text-center m-5 ">Mes competences</h1>
      <div className="w-full grid gap-10 grid-cols-3  max-md:grid max-md:grid-cols-2 max-sm:grid-cols-1 justify-center pt-10 ">
        <Card src={<FaCode className="w-full h-full text-light-green " />} title={"front-end"} list={
          front.map((items , index) =>(
            <li key={index}>{items.name}</li>
           ))
        }/>
        <Card src={<GiSkills className="w-full h-full text-light-green"/>} title={"soft-skills"} list={
          softSkils.map((items , index) =>(
            <li key={index}>{items.name} </li>
           ))
        } />
        <Card src={<FaCode className="w-full h-full text-light-green " />} title={"back-end"} list={
          back.map((items , index) =>(
            <li key={index}>{items.name} </li>
           ))
        } />
      </div>
      </div>
      </div>
     
      <div className="mb-20 px-2 flex flex-col justify-center items-center" >
          <h1 className="font-extrabold text-color-base m-5 text-xd ">En savoir plus</h1>
           {/* my project description */}
      </div>
        <div id="contact">
          <Reseau />
        </div>
    </div>
}



const front = [
  {"name" : "html"}, {"name" : "css"},
   {"name": "tailwindCss"},{"name" : "bootstrapCss"},
    {"name" : "javascript"}, {"name" : "reactJs"}, {"name" : "nextJs"},{"name" : "web disign"} ]

const back = [
  {"name" : "node js"},{"name" : "express"},
  {"name" : "php(basic)"},{"name" : "mongoDB"}]

const softSkils = [
  {"name" : "anglais"}, {"name" : "figma"},
  {"name" : "github"},{"name" : "cms"}
]
