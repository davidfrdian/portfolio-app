import Work1 from "../.././assets/work1.png";
import Work2 from "../.././assets/work2.png";
import Work3 from "../.././assets/work3.png";
import Work4 from "../.././assets/work4.png";
import Work5 from "../.././assets/work5.png";
import Work6 from "../.././assets/work6.jpg";
import Work7 from "../.././assets/work7.png";
import Work8 from "../.././assets/work8.png";
import Work9 from "../.././assets/work9.png";

export const projectsData = [
  {
    id: 9,
    image: Work9,
    title: "Currency Converter",
    category: "website",
    background: `Currency Converter is a simple web application that allows users to convert currencies in real-time. Built with HTML, CSS, and JavaScript, the app utilizes an external API to fetch up-to-date exchange rates. It features a responsive design, dropdowns to select currencies, an input field for the amount, and a "Convert" button to quickly reverse the currency pair. This project is ideal both as a practical tool for quick currency conversions and as a front-end development exercise involving API integration.`,
    tools: [
      {
        name: "HTML",
        icon: () => (
          <img
            src="https://img.icons8.com/color/48/html-5--v1.png"
            alt="html-5--v1"
          />
        ),
      },
      {
        name: "CSS",
        icon: () => (
          <img src="https://img.icons8.com/fluency/48/css3.png" alt="css3" />
        ),
      },

      {
        name: "Javascript",
        icon: () => (
          <img
            src="https://img.icons8.com/color/48/javascript--v1.png"
            alt="javascript--v1"
          />
        ),
      },
    ],
    github: "https://github.com/davidfrdian/currency-converter",
    link: "https://currency-converter-nine-weld-67.vercel.app/",
  },
  {
    id: 8,
    image: Work8,
    title: "Rock Paper Scissors Game",
    category: "website",
    background: `This project is an interactive Rock Paper Scissors game built using HTML, CSS, and JavaScript. The player selects one of the three options, and the computer randomly chooses its move. The result — win, lose, or draw — is displayed instantly. The purpose of this project is to practice basic programming logic, DOM manipulation, and real-time user interaction. The responsive design also ensures a smooth experience across different screen sizes, including mobile devices.`,
    tools: [
      {
        name: "HTML",
        icon: () => (
          <img
            src="https://img.icons8.com/color/48/html-5--v1.png"
            alt="html-5--v1"
          />
        ),
      },
      {
        name: "CSS",
        icon: () => (
          <img src="https://img.icons8.com/fluency/48/css3.png" alt="css3" />
        ),
      },

      {
        name: "Javascript",
        icon: () => (
          <img
            src="https://img.icons8.com/color/48/javascript--v1.png"
            alt="javascript--v1"
          />
        ),
      },
    ],
    github: "https://github.com/davidfrdian/rock-paper-scissors",
    link: "https://rock-paper-scissors-fawn-one.vercel.app/",
  },
  {
    id: 1,
    image: Work1,
    title: "QuickBuy E-commerce Application",
    category: "Website",
    background: `In today's rapidly evolving digital landscape, the demand for fast, efficient, and user-friendly e-commerce platforms is growing. QuickBuy is designed as a dummy e-commerce platform created for development and testing purposes. It provides a simulated online shopping experience with an intuitive interface and optimized performance, allowing users to explore features such as instant payments, personalized product recommendations, and integration with multiple shipping services. 
      
      Furthermore, QuickBuy is intended to demonstrate the capabilities of an e-commerce system without processing real transactions. It serves as a prototype for businesses and developers to test functionalities like sales analytics, automated promotions, and inventory management. With cutting-edge technology and robust security measures, QuickBuy acts as a learning and experimentation tool while showcasing the potential of modern e-commerce solutions.`,
    tools: [
      {
        name: "Next.js",
        icon: () => (
          <img src="https://img.icons8.com/color/48/nextjs.png" alt="nextjs" />
        ),
      },
      {
        name: "Flask",
        icon: () => (
          <img src="https://img.icons8.com/ios/50/flask.png" alt="flask" />
        ),
      },
      {
        name: "MySQL",
        icon: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 48 48"
          >
            <linearGradient
              id="eDMgMixeD6M6EYSYBuJ8ya_9nLaR5KFGjN0_gr1"
              x1="9.8"
              x2="11.081"
              y1="25.236"
              y2="36.899"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#058f92"></stop>
              <stop offset=".5" stop-color="#038489"></stop>
              <stop offset="1" stop-color="#026d71"></stop>
            </linearGradient>
            <path
              fill="url(#eDMgMixeD6M6EYSYBuJ8ya_9nLaR5KFGjN0_gr1)"
              d="M0.002,35.041h1.92v-7.085l2.667,6.057c0.329,0.755,0.779,1.022,1.662,1.022 s1.315-0.267,1.644-1.022l2.667-5.902v6.93h1.92v-7.258c0-0.697-0.277-1.035-0.849-1.209c-1.367-0.43-2.285-0.059-2.7,0.872 l-2.735,6.16l-2.649-6.16c-0.398-0.93-1.332-1.302-2.7-0.872C0.277,26.748,0,27.085,0,27.782v7.258H0.002z M13.441,29.281h1.92 v4.055c-0.015,0.2,0.064,0.731,0.99,0.745c0.472,0.008,2.821,0,2.85,0v-4.8h1.92c0.008,0,0,5.968,0,5.993 c0.01,1.472-1.828,1.662-2.673,1.687h-5.006v-0.96c0.01,0,4.787,0.001,4.801,0c1.088-0.115,0.959-0.714,0.959-0.896v-0.064H16.19 c-1.67-0.015-2.735-0.751-2.747-1.59C13.441,33.373,13.479,29.317,13.441,29.281z"
            ></path>
            <linearGradient
              id="eDMgMixeD6M6EYSYBuJ8yb_9nLaR5KFGjN0_gr2"
              x1="34.224"
              x2="35.101"
              y1="25.644"
              y2="35.217"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#ff9c0f"></stop>
              <stop offset=".813" stop-color="#d67e00"></stop>
            </linearGradient>
            <path
              fill="url(#eDMgMixeD6M6EYSYBuJ8yb_9nLaR5KFGjN0_gr2)"
              d="M22.081,35.041h4.807c0.63,0,1.242-0.132,1.728-0.36c0.81-0.372,1.144-0.875,1.144-1.536 v-1.368c0-1.476-1.83-1.536-2.88-1.536h-1.92c-0.755,0-0.87-0.456-0.96-0.96v-0.96c0.09-0.384,0.258-0.9,0.923-0.96 c0.773,0,4.836,0,4.836,0v-0.96h-4.566c-0.755,0-3.114,0.09-3.114,1.92v1.187c0,0.84,0.738,1.524,2.34,1.692 c0.18,0.012,0.36,0.024,0.539,0.024c0,0,1.866-0.036,1.92-0.024c1.08,0,0.96,0.84,0.96,0.96v0.96c0,0.132-0.03,0.96-0.971,0.96 c-0.072,0-4.789,0-4.789,0V35.041z M40.32,33.08c0,1.159,0.655,1.809,2.392,1.939c0.162,0.011,0.325,0.021,0.488,0.021H48v-0.96 h-4.435c-0.991,0-1.325-0.416-1.325-1.011v-6.669h-1.92V33.08z M30.704,33.121v-4.8c0-1.02,0.5-1.724,1.916-1.92h0.672h3.447h0.525 c1.416,0.196,2.08,0.899,2.08,1.92v4.782c0,0.827-0.215,1.271-0.916,1.559L39.916,36h-2.16l-1.07-0.96h-1.257l-2.136,0.012 c-0.309,0-0.635-0.043-0.993-0.141C31.226,34.618,30.704,34.054,30.704,33.121z M32.624,33.121c0.098,0.467,0.473,0.96,1.14,0.96 h1.864l-1.068-0.96h2.175l0.519,0.482c0,0,0.186-0.152,0.186-0.482c0-0.33-0.016-4.8-0.016-4.8c-0.098-0.434-0.538-0.96-1.188-0.96 h-2.471c-0.749,0-1.14,0.548-1.14,1.058L32.624,33.121L32.624,33.121z"
            ></path>
            <linearGradient
              id="eDMgMixeD6M6EYSYBuJ8yc_9nLaR5KFGjN0_gr3"
              x1="35.029"
              x2="40.355"
              y1="11.716"
              y2="26.75"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#058f92"></stop>
              <stop offset=".5" stop-color="#038489"></stop>
              <stop offset="1" stop-color="#026d71"></stop>
            </linearGradient>
            <path
              fill="url(#eDMgMixeD6M6EYSYBuJ8yc_9nLaR5KFGjN0_gr3)"
              d="M46.199,25.389c-1.031-0.028-1.818,0.068-2.491,0.351c-0.191,0.081-0.496,0.083-0.528,0.323 c0.105,0.11,0.121,0.275,0.205,0.41c0.16,0.26,0.432,0.609,0.674,0.791c0.265,0.2,0.538,0.414,0.821,0.587 c0.504,0.307,1.067,0.483,1.553,0.791c0.286,0.181,0.57,0.411,0.85,0.615c0.138,0.102,0.23,0.259,0.41,0.323 c0-0.01,0-0.019,0-0.029c-0.094-0.12-0.119-0.285-0.205-0.411c-0.127-0.127-0.254-0.254-0.381-0.381 c-0.372-0.494-0.846-0.929-1.348-1.289c-0.401-0.288-1.298-0.677-1.466-1.143c-0.01-0.01-0.019-0.019-0.03-0.03 c0.284-0.032,0.617-0.135,0.879-0.205c0.441-0.118,0.834-0.087,1.289-0.205c0.205-0.059,0.41-0.117,0.615-0.176 c0-0.039,0-0.078,0-0.117c-0.23-0.236-0.395-0.548-0.645-0.762c-0.657-0.559-1.373-1.117-2.11-1.583 c-0.409-0.258-0.915-0.426-1.348-0.645c-0.146-0.074-0.402-0.112-0.498-0.234c-0.228-0.29-0.351-0.659-0.527-0.996 c-0.368-0.708-0.73-1.482-1.055-2.227c-0.223-0.508-0.368-1.01-0.645-1.466c-1.331-2.188-2.764-3.509-4.982-4.807 c-0.472-0.276-1.041-0.385-1.642-0.528c-0.323-0.019-0.645-0.039-0.968-0.059c-0.197-0.083-0.401-0.323-0.587-0.44 c-0.735-0.465-2.621-1.475-3.165-0.147c-0.344,0.838,0.514,1.656,0.821,2.081c0.215,0.298,0.491,0.632,0.645,0.968 c0.101,0.22,0.119,0.441,0.205,0.674c0.213,0.574,0.55,1.228,0.826,1.759c0.139,0.269,0.293,0.551,0.469,0.791 c0.108,0.147,0.293,0.212,0.323,0.44c-0.181,0.253-0.191,0.646-0.293,0.968c-0.458,1.445-0.285,3.24,0.381,4.308 c0.204,0.328,0.686,1.032,1.348,0.762c0.579-0.236,0.45-0.967,0.615-1.612c0.037-0.146,0.014-0.253,0.088-0.351 c0,0.01,0,0.019,0,0.03c0.176,0.351,0.351,0.704,0.528,1.055c0.391,0.629,1.084,1.286,1.67,1.73 c0.304,0.23,0.544,0.628,0.938,0.762c0-0.01,0-0.019,0-0.03c-0.01,0-0.019,0-0.03,0c-0.076-0.119-0.196-0.168-0.293-0.264 c-0.229-0.225-0.485-0.504-0.674-0.762c-0.534-0.725-1.006-1.519-1.436-2.345c-0.205-0.395-0.384-0.829-0.557-1.231 c-0.067-0.155-0.066-0.389-0.205-0.469c-0.19,0.294-0.468,0.532-0.615,0.879c-0.234,0.555-0.265,1.233-0.351,1.934 c-0.052,0.018-0.029,0.006-0.059,0.029c-0.408-0.099-0.552-0.518-0.704-0.879c-0.384-0.912-0.455-2.38-0.117-3.429 c0.087-0.272,0.482-1.127,0.323-1.378c-0.076-0.251-0.328-0.396-0.468-0.587c-0.175-0.236-0.348-0.548-0.469-0.821 c-0.314-0.711-0.612-1.538-0.943-2.257c-0.158-0.344-0.425-0.691-0.645-0.996c-0.243-0.338-0.516-0.587-0.704-0.996 c-0.067-0.145-0.158-0.378-0.059-0.528c0.032-0.101,0.076-0.143,0.176-0.176c0.17-0.132,0.643,0.043,0.821,0.117 c0.47,0.195,0.862,0.381,1.26,0.645c0.191,0.127,0.384,0.372,0.615,0.44c0.088,0,0.176,0,0.264,0 c0.413,0.095,0.875,0.03,1.26,0.147c0.682,0.207,1.292,0.529,1.846,0.879c1.69,1.067,3.071,2.585,4.016,4.397 c0.152,0.292,0.218,0.57,0.351,0.879c0.27,0.624,0.611,1.266,0.879,1.876c0.268,0.609,0.53,1.223,0.909,1.73 c0.2,0.266,0.97,0.409,1.319,0.557c0.245,0.104,0.647,0.211,0.879,0.351c0.444,0.268,0.874,0.587,1.289,0.879 C45.528,24.803,46.167,25.124,46.199,25.389z"
            ></path>
            <path
              fill="#00796b"
              d="M33.098,14.223c-0.215-0.004-0.367,0.023-0.528,0.059c0,0.01,0,0.019,0,0.03c0.01,0,0.019,0,0.03,0 c0.103,0.21,0.283,0.347,0.41,0.528c0.098,0.205,0.195,0.41,0.293,0.615c0.01-0.01,0.019-0.019,0.029-0.029 c0.181-0.128,0.265-0.332,0.264-0.645c-0.073-0.077-0.084-0.173-0.147-0.264C33.365,14.394,33.203,14.325,33.098,14.223z"
            ></path>
          </svg>
        ),
      },
      {
        name: "CSS",
        icon: () => (
          <img src="https://img.icons8.com/fluency/48/css3.png" alt="css3" />
        ),
      },
    ],
    github: "https://github.com/davidfrdian/final-project",
  },
  {
    id: 2,
    image: Work2,
    title: "Pokemon App",
    category: "Website",
    background: `The Pokémon Information App is designed to provide users with a seamless and interactive way to access detailed information about their favorite Pokémon. Utilizing an external API, the app retrieves real-time data, ensuring that users receive up-to-date information on various Pokémon species, including their abilities, types, evolutions, and base stats.

    This application is built with a user-friendly interface, making it easy for both casual fans and dedicated trainers to explore and learn more about the Pokémon universe. Users can search for specific Pokémon, browse a complete list of Pokémon, and save their favorites for quick access. Additionally, users can view detailed Pokémon information such as species, type, attack, defense, and HP stats. Whether comparing stats, discovering new species, or creating a personalized collection of favorite Pokémon, this app serves as a comprehensive and convenient resource for all Pokémon enthusiasts.`,
    tools: [
      {
        name: "React.js",
        icon: () => (
          <img
            src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/50/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
            alt="external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo"
          />
        ),
      },
      {
        name: "Javascript",
        icon: () => (
          <img
            src="https://img.icons8.com/color/48/javascript--v1.png"
            alt="javascript--v1"
          />
        ),
      },

      {
        name: "CSS",
        icon: () => (
          <img src="https://img.icons8.com/fluency/48/css3.png" alt="css3" />
        ),
      },
    ],
    github: "https://github.com/davidfrdian/milestone-2-davidfrdian/tree/main",
    link: "https://pokemon-app-chi-ashen.vercel.app/",
  },
  {
    id: 3,
    image: Work3,
    title: "Gojek Clone Homepage",
    category: "website",
    background: `The Gojek Dummy App is a responsive clone of Gojek's homepage, designed using HTML, CSS, and JavaScript. This project aims to replicate the visual and functional aspects of the original Gojek website, providing an immersive experience for users while maintaining a sleek and modern interface.
    
    Built with responsiveness in mind, this clone ensures optimal display across various devices, including desktops, tablets, and mobile phones. It serves as an excellent learning tool for developers to understand front-end development principles, UI/UX design, and responsive web design techniques. While this app does not include backend functionality or real transactions, it successfully mimics the look and feel of Gojek's homepage, making it a valuable reference for web development enthusiasts.`,
    tools: [
      {
        name: "HTML",
        icon: () => (
          <img
            src="https://img.icons8.com/color/48/html-5--v1.png"
            alt="html-5--v1"
          />
        ),
      },
      {
        name: "CSS",
        icon: () => (
          <img src="https://img.icons8.com/fluency/48/css3.png" alt="css3" />
        ),
      },

      {
        name: "Javascript",
        icon: () => (
          <img
            src="https://img.icons8.com/color/48/javascript--v1.png"
            alt="javascript--v1"
          />
        ),
      },
    ],
    github: "https://github.com/RevoU-FSSE-4/milestone-1-davidfrdian/tree/main",
    link: "https://gojek-by-david.vercel.app/",
  },
  {
    id: 4,
    image: Work4,
    title: "Spider Club",
    category: "website",
    background: `The Spider Club App is a web-based gallery inspired by Pinterest, designed to showcase an extensive collection of Spider-Man images. Built using HTML, CSS, and a touch of JavaScript, this application provides an engaging and visually appealing browsing experience for Spider-Man fans.
      
      With a responsive layout, Spider Club ensures that users can seamlessly explore and enjoy high-quality images of Spider-Man across different devices. The design mimics the intuitive and dynamic grid structure of Pinterest, allowing users to navigate effortlessly through various Spider-Man visuals. Although this app does not include backend functionality, it serves as a great reference for front-end development and UI/UX design enthusiasts who appreciate superhero-themed web projects.

`,
    tools: [
      {
        name: "HTML",
        icon: () => (
          <img
            src="https://img.icons8.com/color/48/html-5--v1.png"
            alt="html-5--v1"
          />
        ),
      },
      {
        name: "CSS",
        icon: () => (
          <img src="https://img.icons8.com/fluency/48/css3.png" alt="css3" />
        ),
      },

      {
        name: "Javascript",
        icon: () => (
          <img
            src="https://img.icons8.com/color/48/javascript--v1.png"
            alt="javascript--v1"
          />
        ),
      },
    ],
    github: "https://github.com/RevoU-FSSE-4/module-2-davidfrdian/tree/main",
    link: "https://spiderclub.vercel.app/",
  },

  {
    id: 5,
    image: Work5,
    title: "Cat Breeds",
    category: "website",
    background: `The Cat Breeds App is a simple yet informative web project designed to showcase various cat breeds. Built using only HTML and CSS, this project serves as my first step into web development, focusing on structuring content and styling elements effectively.
      
      The application presents a collection of different cat breeds with basic information about each. While it does not include interactivity or dynamic features, it explores fundamental HTML elements and CSS styling techniques to create a visually appealing and well-structured layout. This project is a hands-on learning experience, allowing me to experiment with different styling methods and layout designs to enhance the presentation of content on the web.`,
    tools: [
      {
        name: "HTML",
        icon: () => (
          <img
            src="https://img.icons8.com/color/48/html-5--v1.png"
            alt="html-5--v1"
          />
        ),
      },

      {
        name: "CSS",
        icon: () => (
          <img src="https://img.icons8.com/fluency/48/css3.png" alt="css3" />
        ),
      },
    ],
    github: "https://github.com/RevoU-FSSE-4/module-1-davidfrdian/tree/main",
    link: "https://module-1-davidfrdian.vercel.app/",
  },

  {
    id: 6,
    image: Work6,
    title:
      "Podcast: Representasi dan Tantangan Perempuan di Dunia Politik | FPCI Talks!",
    category: "other",
    background: `Women make up more than half of the world's population, yet their representation in the political arena remains significantly low. Despite progress in gender equality, many women continue to face obstacles when pursuing political roles. These challenges include gender discrimination, limited financial resources, and deep-rooted cultural barriers that hinder their participation in governance and decision-making processes.
    
    In this episode of the Representation and Challenges of Women in Politics podcast, available on Spotify, we delve into the realities women encounter in political spheres. We explore the factors contributing to the gender gap in politics, discuss the societal and institutional challenges they face, and highlight inspiring stories of women who have broken barriers. Through this discussion, we aim to raise awareness and foster dialogue on the importance of gender representation in leadership and governance.`,
    tools: [
      {
        name: "Google Docs",
        icon: () => (
          <img
            src="https://img.icons8.com/color/48/google-docs--v1.png"
            alt="google-docs--v1"
          />
        ),
      },

      {
        name: "Google Docs",
        icon: () => (
          <img
            src="https://img.icons8.com/parakeet/48/spotify.png"
            alt="spotify"
          />
        ),
      },
    ],
    link: "https://open.spotify.com/episode/2mmtTHguhsUA8sJHTrhc3T?si=gYU4lDS0T_6Nj_lfYI3JGQ",
  },

  {
    id: 7,
    image: Work7,
    title: "Teaser Unboxing Foreign Policy #6 Event",
    category: "other",
    background: `The UFC 6 Teaser Video is a dynamic and engaging promotional content designed to highlight the key themes of the upcoming Unboxing Foreign Policy (UFC) #6 webinar. With a duration of 4 minutes and 12 seconds, this teaser aims to capture the essence of the discussion surrounding the topic “Towards the 2024 Election: Examining the State of Freedom of Speech in ASEAN.”
      
      This teaser video provides a compelling introduction to the webinar, emphasizing the importance of freedom of speech in ASEAN countries, particularly in the context of the 2024 Indonesian elections. It showcases snippets of expert insights, thought-provoking questions, and visual representations of the varying conditions of free speech across different ASEAN nations. Through impactful visuals and engaging narration, the video is crafted to spark curiosity and encourage audience participation in the main event.
      
      UFC 6 is a part of FPCI Chapter UPNVJ’s annual program, which serves as a forum for discussing contemporary foreign policy issues. This teaser not only serves as a promotional tool but also as an informative piece that underscores the relevance of free speech in democratic processes. By offering a preview of the insightful discussions that will take place, the video aims to increase audience engagement and awareness about the complexities of freedom of expression in the region.`,
    tools: [
      {
        name: "Capcut",
        icon: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192 192"
            fill="none"
          >
            <path
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="12"
              d="M170 42 22 124v14c0 6.627 5.373 12 12 12h78c6.627 0 12-5.373 12-12v-9.5"
            />
            <path
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="12"
              d="M170 150 22 68V54c0-6.627 5.373-12 12-12h78c6.627 0 12 5.373 12 12v9.5"
            />
          </svg>
        ),
      },
    ],

    link: "https://drive.google.com/file/d/145oWF8CI_C6yllSY81GfBPphZl8YL8e2/view?usp=sharing",
  },
];

export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "website",
  },
  {
    name: "design",
  },
  {
    name: "other",
  },
];
