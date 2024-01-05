import { useRouteError } from "react-router-dom";

export default function PageError(){
    const error = useRouteError();
    console.log(error);
  
    return <div className="w-full max-h-6xl flex justify-center py-9 border ">
        <div className="border px-20 py-10 bg-color-button text-sous-text-inv ">
        <h1 className="text-xd "> une heureur est survenu lors du chargement</h1>
        <p>
          {error ?.error?.toString() ?? error?.toString() }
        </p>
        </div>
      </div>
  }