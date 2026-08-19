import type { Config } from "tailwindcss";


const config: Config = {

  content: [

    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

  ],


  theme: {


    extend: {


      colors:{


        primary:"#2563eb",


        success:"#16a34a",


        warning:"#ea580c",


        danger:"#dc2626",


        surface:"#ffffff",


      },


      borderRadius:{


        xl:"1rem",

        "2xl":"1.5rem",


      },


      boxShadow:{


        card:

        "0 4px 20px rgba(15,23,42,0.06)",


      },


    },


  },


  plugins:[],


};


export default config;