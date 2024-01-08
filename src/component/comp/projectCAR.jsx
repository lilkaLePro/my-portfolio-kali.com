import Button from "./button";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import LightButton from "./lightButton";



export default function ProjectsCard({imgsrc ,imgalt , title , desc , icon }) {

    return <div className=" shadow-lg rounded-2xl flex gap-5 p-5 m-5 flex-col max-w-4xl max-md:flex-col items-center hover:light-bg ">
            <div className="shadow-md w-80 rounded-lg shadow-xm overflow-hidden max-lg:w-64 ">
                <img className="w-full h-full" src={imgsrc} alt={imgalt} />
            </div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-center text-color-base text-xd">{title}</h1>
                <p className="font-Comfortaa max-w-2xl p-5 max-sm:p-1 text-xm max-lg:max-w-md  ">{desc} </p>
                <div className="flex flex-row gap-3 w-full">
                    <LightButton iconb={<FaGithub/>} value="github" icon={icon} />
                    <Button iconf={<FaLongArrowAltRight/>} value="visiter"/>
                </div>
            </div>
        </div>
}