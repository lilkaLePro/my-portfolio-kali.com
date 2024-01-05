import Button from "./button";


export default function ProjectsCard({imgsrc ,imgalt , title , desc , icon }) {

    return <div className=" shadow-lg rounded-2xl flex gap-5 p-5 m-5 flex-col max-w-4xl max-md:flex-col items-center ">
            <div className="shadow-md w-80 rounded-lg shadow-xm overflow-hidden max-lg:w-64 ">
                <img className="w-full h-full" src={imgsrc} alt={imgalt} />
            </div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-center text-color-base text-xd">{title}</h1>
                <p className="font-Comfortaa max-w-2xl p-5 text-xm max-lg:max-w-md  ">{desc} </p>
                <div className="flex flex-row gap-3 ">
                    <Button value=" OO  github" icon={icon} />
                    <Button value="visiter"/>
                </div>
            </div>
        </div>
}