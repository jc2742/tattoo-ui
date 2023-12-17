/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5A54DD",
        dark: "#16325C",
        light: "#F5F5F5",
        secondary: "#787878",
        success: "#419F07",
        danger: "#FF005C",
        warning: "#F29220",
        info: "#46CAFC",
        lightBlue: "#EEF8FF",
        accentBlue: "#D8EEFF",
        /**List Component colors */
        listSecondBorder: "#ADB5BD",
        listCellBorder: "#DEE2E6",
        chatBubbleGreen: "#DDF1D0",
        darkBlue: '#00093D',
        gray: {
          100: "#F8F9FA",
          200: "#E9ECEF",
          300: "#DEE2E6",
          400: "#CED4DA",
          500: "#ADB5BD",
          600: "#828B93",
          700: "#495057",
          800: "#343A40",
          900: "#212529"
        },
        alert: {
          secondary: {
            text: "#787878",
            border: "#C0C0C0",
            bg: "#E8E8E8",
            link: "#646464",
          },
          primary: {
            text: "#2B5AA0",
            border: "#54ACEC",
            bg: "#D8EEFF",
            link: "#204275",
          },
          success: {
            text: "#388E05",
            border: "#81C656",
            bg: "#F4FCEE",
            link: "#348404",
          },
          warning: {
            text: "#DC841C",
            border: "#FFC061",
            bg: "#FFF5E7",
            link: "#C97717",
          },
          danger: {
            text: "#FF005C",
            border: "#FF758E",
            bg: "#FFF0F3",
            link: "#E20051",
          },
          info: {
            text: "#218DB6",
            border: "#8ED7F3",
            bg: "#E7F8FF",
            link: "#157EA6",
          },
        }
      },
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
      rubik: ["Rubik"],
      "rubik-italic": ["Rubik-Italic"],
    }
  },
  plugins: [],
}

