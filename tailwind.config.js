/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'px': '1px',
        "sidebar": "265px"
      },
      backgroundImage: {
        blueBorder: 'linear-gradient(270deg, #D8EEFF 57.65%, #D8EEFF 82.58%, #B2DDFF 93.38%, #86CAFF 100%)',
        grayBorder: 'linear-gradient(270deg, #F8F9FA 64.8%, #F4F4F4 87.35%, #E8E8E8 94.5%, #D1D1D1 100%)',
      },
      boxShadow: {
        'grayBorder': '0px 0px 10px 2px rgba(192, 192, 192, 0.2)',
        'modalBorder': '0px 0px 10px 0px #00000040',
        'primaryBorder': '0px 4px 16px 4px #3A79D840',
      },
      borderRadius: {
        r1: "30px 12px"
      }
    },
    fontFamily: {
      pacifico: ["Pacifico"],
      rubik: ["Rubik"],
    }
  },
  plugins: [],
}

