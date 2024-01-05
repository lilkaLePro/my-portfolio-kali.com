import ProjectsCard from "../comp/projectCAR"

export default function Apropos (){
    return <div className="flex justify-center flex-col items-center ">
      <div className="max-w-5xl max-sm:w-full px-10 max-sm:px-1 flex flex-col items-center  gap-10 pt-24">
        <div>
          <h1 className="text-xd text-light-green text-center p-5">A propos de moi </h1>
          <p className="text-xm">
{/* 
          Ceci c'est la première version mon portfolio et un blog en cours d'integration et c'est aussi le lieu ou je veux
          expérimenter de nouvelle découverte sans bien sûr surcharger le site afin d'éviter les problèmes de pèrformences.
          J'ai codé en intégralité ce site en full-code html , css et pour ce dernier j'utilise le framework tailwindcss , javascript; j'utilise le framework javascript pour
          tous ces avantage et faut le dire: c'est aussi le seul que j'ai connu par mon formateur ; j'ai pas testé les autres.
          Sur le Ui/Ux design en commençant par les couleurs j'ai choisi un thème jaunes et l'ai maintenu dans tout le site.
          j'utilise le font. Sur le design toujours j'éssaye de faire un layout in cards.       */}
          </p>
        </div>
        <div>
          <div className="flex items-center gap-2">
          <span className=" relative flex h-3 w-3">
            <span className="bg-bg-remp animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="bg-bg-remp relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span><span>projet en cours</span>
          </div>
          <div className="p-3 mx-2 bg-white-bg">
            En ce moment je suis dans un projet de developpement d'une application web en React.js, Next.js et des librairies tiers. Pour des raisons de confidentialités je m'arrête là.
            <br /><span className="text-button-sous border-b">Indice : "Dashbord"</span>
          </div>
        </div>
        <h1 className="text-light-green text-xd font-extrabold text-center m-5 ">Mes projets</h1>
        <div className="grid grid-cols-2 gap-5 py-10 max-md:grid-cols-1 ">
         {projetPresent.map((items, index )=> (<div key={index}>
          <ProjectsCard imgsrc={items.src} imgalt={items.alt}
          title={items.titre} desc={items.desc} icon={null} />
         </div>))}
        </div>
      </div>
    </div>
}

const projetPresent = [
  {titre : "Clone boutique de coque d'Iphone", desc : "J'ai cloné le site de vente de cocque de protection d'iphone en production qui est entierement codé en html et tailwindcss et fais de mon mieux pour être le plus proche possible. " ,
    src : "/img/IMG-aple-site-shop-clown.png", alt :"capture image boutique de coque d'iphone" },
  {titre : "Calculatrice", desc: "Une simple calculatrice entierment codé en javaScript et css pure avec des fuctionnalités basics d'opérations mathematiques. " ,
    src : "/img/capture-calculatrice.png", alt: "capture image application calculatrice " },
  ]
