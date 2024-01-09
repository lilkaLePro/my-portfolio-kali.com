import { Link } from "react-router-dom";

export default function LightButton({value , iconf , iconb}){
    return <div>
        <span> 
        <a className="text-color-base font-bold font-Comfortaa cursor-pointer
            border-2 border-sous-text drop-shadow p-1 text-xs rounded-lg hover:bg-bg-remp
            transition-all shadow-md flex gap-1 justify-center flex-row items-center">
            {iconb} {value} {iconf}
        </a>
        </span>
</div>
}