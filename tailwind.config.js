/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors:{
      "color-base" : "var(--text-base)",
      "sous-text" : "var(--sous-text)",
      "sous-text-inv" : "var(--sous-text-inv)",
      "remp" : "var(--col-remp)",
      "button-hover" : "var(--button-hover)",
      "button-sous" : "var(--button-sous)"
    },
    backgroundColor : {
      "color-button" : "var(--color-button)",
      "hover-button" : "var(--button-hover)",
      "bg-remp" : "var(--col-remp)",
      "white-bg" : "var(--sous-text-inv)",
      "white"  : "#fff",
      "bg-light" : "var(--sous-text-inv)" 
    },
    fontFamily : {
      Comfortaa : "'Comfortaa', sans-serif",
      Ubuntu : "'Ubuntu', sans-serif"
    },
      fontSize : {
        xs : "15px",
        xm : "17px",
        md : "19px",
        xd : "22px",
        lg : "50px",
        xl : "70px"
      },
      lineHeight : {
        xm : "30px",
        md : "75px"
      },
      screens :{
        'sm' : '640px',
        'md' : '768px',
        'lg' : '1024px'
      }
      
     
    },
  plugins: [
    
  ],
}

