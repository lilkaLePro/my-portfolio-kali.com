import Card from "../comp/Card.jsx"
import Button from "../comp/button.jsx"
import { IoIosCall } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { FaCode } from "react-icons/fa6";

export default function Home(){

    return <div className="flex flex-col justify-center items-center w-full ">
    <div>

      <div className="max-w-6xl max-sm:flex-col px-5 flex mt-24 max-sm:items-center">
      <div className=" p-10 px-20 max-xm:px-0  max-md:text-center">
        <h1 className="font-Comfortaa text-sous-text">Dévellopeur</h1>
        <h1 className="max-md:text-lg text-color-base text-xl font-extrabold leading-md ">Front-End  <span>React</span> / 
        Web <span>Disigner</span>  </h1>
        <p className="mt-5 text-sous-text font-Comfortaa">
        Salut a vous, moi c est <span className="font-bold">Kaly Diallo</span> é passionné du code é et du graphisme é surtout animé par la creativité
        , basé à Dakar, Sénégal 
        </p>
        <span className="text-sous-text w-full mt-10 flex flex-row gap-2 max-xm:m-0 max-lg:flex-col font-semibold">Voulez vous avoir une interface comme celle ci ? 
        <Button  iconf={<IoIosCall/>} value={"me contacter"}/>  </span>

      {/* <div className="absolute border w-80 h-80 rounded-full bg-ligh-yel "> </div> */}
      {/* <div className="absolute border w-80 h-80 rounded-full bg-light-green top-20 "> </div> */}

      </div>
        


      <div className="flex flex-col items-center ">
        <div className="Pprofil w-64 max-md:w-44 m-5 rounded-full shadow-md overflow-hidden ">
          <img src="/img/PP-kali.jpg"className="w-full h-full" alt="photo de profile" />
          </div>
        <div className="flex gap-10">
          <div><div className="w-9 h-9  rounded-full overflow-hidden"><FaGithub className="w-full h-full" /> </div> github</div>
          <div><div className="w-9 h-9 overflow-hidden"><FaLinkedin className="w-full h-full"/></div> linkedin</div>
      </div>
      </div>
      
      </div>

      <div className="w-full mb-20 flex flex-col  items-center  justify-center py-5 px-40 ">
        <h1 className="text-light-green text-xd font-extrabold text-center m-5 ">Mes competences</h1>
      <div className="w-full grid gap-10 grid-cols-3 grid-flow-col-32  max-md:grid max-md:grid-cols-2 max-sm:grid-cols-1 justify-center pt-10 ">
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
     
      <div className="max-w-full mb-20 px-10 flex flex-col justify-center items-center" >
          <h1 className="font-extrabold text-light-green m-5 p-3 text-xd ">En savoir plus</h1>
          <p className="px-2 max-w-6xl font-Comfortaa ">
          j ai écrit mes premiérs lignes de codes quant j étais lycée en 2021 , puis j ai decider de m iscrire dans une ecole de formation
            après 1ans à bidouller tout seul , avant j etait graphiste (je fesais du montage photo, vidéo et 
            creation de logo sur mobile) et tout est parti quant par hasard sur youtube je suis tombé sur une vidéo qui palait de code et de programation. j ai commencé par du html css js(basic). La raison pour laquelle je suis trés à laise avec ces derniers 
            c est que je me suis cassé la tête avec pendant de longs mois. Aprés s en n est suivi du php qui m interressait pas beaucoups je suis passé sur 
            du node js car mon objectif c etais du <span>MERN stack</span> donc sans reflechire 100x j ai commencé une formation sur react.
            
            Avec l allure que la tech a pris ces dernier momment, il est est obligatoire de toujours être en perpetuelle apprentissages pour toujours se
             metre a jour dans les nouveaux outils comme l IA. C est aussi pourquoi je me suis aussi initié au outils de no-code ou cms comme wordpress pour 
             bien pouvoir optimiser la vitesse de travail.

             L aventage de travailler avec moi c est que : 
             -je suis trés jeune 21ans donc facil à remunérer et j ai des connaissances encore fraiches
             -j apprends naturellement vite et je suis un autodidacte signé.
             -je suis graphiste donc je maitrise tout ce qui est couleur taille alignement et 
          </p>
      </div>
      
    </div>
    

    </div>
}



const front = [
  {"name" : "html"}, {"name" : "css"},
   {"name": "tailwindcss"},{"name" : "bootstrap"},
    {"name" : "javascript"}, {"name" : "react"},{"name" : "web disign"} ]

const back = [
  {"name" : "node js"},{"name" : "express"},
  {"name" : "php(basic)"},{"name" : "mongoDB"}]

const softSkils = [
  {"name" : "anglais"}, {"name" : "figma"},
  {"name" : "github"},{"name" : "cms"}
]
