import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Reseau(){
    
    return <div className=" w-full mb-10 grid grid-cols-4 gap-5 p-3 items-center">
        <div className="h-7 w-7 hover:-translate-y-1 transition-all cursor-pointer ">
            <FaGithub  
            className="w-full h-full  "/>
        </div> 
        <a href="https://linkedin.com/in/kaly-diallo-0087032a3" 
         className="h-7 w-7 cursor-pointer hover:-translate-y-1 transition-all">
            <FaLinkedin  
            className="w-full h-full"/>
        </a>
        <div className="h-7 w-7 hover:-translate-y-1 transition-all cursor-pointer ">
            <FaGithub  
            className="w-full h-full  "/>
        </div> 
        <div className="h-7 w-7 hover:-translate-y-1 transition-all cursor-pointer ">
            <FaGithub  
            className="w-full h-full  "/>
        </div> 
    </div>
}
