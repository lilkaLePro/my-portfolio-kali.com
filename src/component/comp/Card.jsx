import { useEffect } from "react"


export default function Card ({src , title , list}){
    // useEffect(()=>{
    //     const card = document.getElementsByClassName('card');
    //         card.style = "transform : translateY(-20px)"
    // })

    return <div className="font-Comfortaa shadow-lg max-w-52 text-center flex flex-col gap-2 items-center rounded-xl p-5 hover:bg-white-bg transition-all ">
        <div className="w-10 h-10 overflow-hidden ">{src} </div>
        <span className="text-md text-light-green mt-3 font-bold font-Comfortaa ">{title}</span>
        <ul className="text-xm">{list}</ul>
    </div>
}