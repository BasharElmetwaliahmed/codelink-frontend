/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens:{
      'sm':'576px',
      'md':"768px",
      'lg':'992px',
      'xl':'1200px',
      '2xl':'1400px'
    },
    container: {
      center: true,

    },
    extend: {
      colors:{
        'primary':'#D9C6A4',
        'secondary':'#FFFFFF',
      },
            boxShadow: {
        'btnshadow': ' 0px 6px 15px 0px rgba(218, 218, 218, 0.5)',
        'inputshadow':' 0px 6px 20px 0px rgba(218, 218, 218, 0.3);'
      }
    },
  },
  plugins: [],
};
