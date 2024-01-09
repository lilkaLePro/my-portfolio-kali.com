/**
 * 
 * @param {string} value
 */

export default function Button({value, href , iconf , iconb}){

    return <div href={href} >
        <span> 
        <a href="#footer" className="text-sous-text-inv font-bold font-Comfortaa 
        bg-color-button drop-shadow p-2 text-xs rounded-lg hover:bg-hover-button
        transition-all shadow-md flex gap-1 justify-center flex-row items-center cursor-pointer">
            {iconb} {value} {iconf}</a>
        </span>
    </div>
}