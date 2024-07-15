/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F6F52",
        secondary: "#1A4D2E",
        minorTX: "#E8DFCA",
        // minorTX: "#faf3e2",
        light:'#EEEEEE',
        primaryLight:'#F5EFE6',
      },
      boxShadow: {
        "border-b-primary": "0 3px 0px 0px white",
        "border-b-white": "0px 2px 1px 0px white",
      },
      backgroundImage: {
        "img-shape": "url('../public/imgs/Untitled.png')",
        "img-halva": "url('../public/imgs/پک-پذیرایی-همایش-2048x758.jpg')",
        "img-side": "url('../public/imgs/Untitled2.png')",
      },
    },
    screens: {
      sm: "350px",
      smMd:'500px',
      md: "768px",
      mdLg:'850px',
      lg: "976px",
      xl: "1200px",
    },
  },
  plugins: [],
}

