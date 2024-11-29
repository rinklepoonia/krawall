tailwind.config = {
  theme: {
    extend: {
      colors: {
        "light-black": "#242424",
        "bright-aqua":"#00FFE0",
      },
      fontSize: {
        "custom-sm": "18px",
        "custom-3xl": "28px",
        "custom-5xl": "50px",
        "custom-7xl":"70px",
        "custom-6xl":"90px",
        "custom-8xl": "100px",
        "custom-9xl":"150px",
        "custom-10xl": "200px",
        "custom-11xl":"300px",
        "big":"400px"
      },
      lineHeight: {
          65:"65%",
          90: "90%",
          100:"100%",
        128: "128%",
        130: "130%",
          133:"133%",
          144: "144%",
          50: "50%",
          500:"500%"
          
      },
      container: {
        center: true,
        padding: "16px",
      },
       backgroundImage: {
         'kernkompetenz-img': "url(./assets/images/png/bg-blue-img.png)",
         "dimond-bg":"url(./assets/images/svg/star.svg)",
         
      },
       backgroundSize: {
        'full': '100% , 100%', 
      },
    },
  },
};
