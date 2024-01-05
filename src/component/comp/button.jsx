/**
 * 
 * @param {string} value
 */

export default function Button({value , icon}){

    return <div>
        <span>
        <a href="#footer" className="text-sous-text-inv font-bold font-Comfortaa bg-color-button drop-shadow p-3 text-xs rounded-lg hover:bg-hover-button transition-all shadow-md">{value}</a>
        </span>
    </div>
}