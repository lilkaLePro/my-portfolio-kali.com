/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors:{
      "color-base" : "var(--text-base)",
      "sous-text" : "var(--sous-text)",
      "sous-text-inv" : "var(--sous-text-inv)",
      "light-green" : "var(--bg-remp)",
      "button-hover" : "var(--button-hover)",
      "button-sous" : "var(--button-sous)"
    },
    backgroundColor : {
      "color-button" : "var(--color-button)",
      "hover-button" : "var(--text-base)",
      "bg-remp" : "var(--bg-remp)",
      "white-bg" : "var(--sous-text-inv)",
      "white"  : "#fff",
      "bg-light" : "var(--sous-text)" 
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
      
     
    },
  plugins: [
    
  ],
}

