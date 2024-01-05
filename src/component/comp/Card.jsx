

export default function Card ({src  , icon , title , list}){

    return <div className="shadow-lg max-w-52 text-center flex flex-col items-center gap-3 rounded-xl p-5">
        <div className="w-10 h-10 border overflow-hidden shadow-xm"><img className="w-full h-full" src={src} /></div>
        <span className="text-md text-color-base font-semibold font-Comfortaa ">{title}</span>
        <ul className="text-xm font-Comfortaa ">{list}</ul>
    </div>
}