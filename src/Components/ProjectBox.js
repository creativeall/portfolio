
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";


const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {

    ShowMeeDesc: "ShowMee is a freelance project where I cloned an existing website using ReactJS. The goal was to accurately replicate the design and ensure full responsiveness across all screen sizes. I used React functional components, hooks, and modern UI practices to build a clean, structured interface. The project included reusable components, CSS styling with Flexbox/Grid, and version control via Git and GitHub. It was completed successfully within the client’s timeline and requirements.",
    ShowMeeGithub: "https://github.com/creativeall/FreelanceProject",
    ShowMeeWebsite: "http://freelancingproject.netlify.app/",

    TextConverterDesc: "TextConverter is a web application built with HTML, CSS, and JavaScript that allows users to convert written text into speech. Using the browser’s built-in speech synthesis API, users can enter any text and listen to it instantly. The project features a clean and user-friendly interface, showcasing my skills in DOM manipulation, JavaScript functionality, and creating interactive web tools without any frameworks.",
    TextConverterGithub: "https://github.com/creativeall/Text-To-Speech-Converter",
    TextConverterWebsite: "https://textspeechconverter01.netlify.app/",

    InstaVibeDesc: "Insta Vibe is a social media platform built using ReactJS, inspired by Instagram. It allows users to share posts, browse content, and engage through likes and comments in a responsive and interactive interface. Developed with React functional components, hooks, and dynamic routing, the project focuses on delivering a clean UI and seamless user experience. It highlights my front-end skills, including component reuse and real-world application development in ReactJS.",
    InstaVibeGithub: "https://github.com/creativeall/InstaVibe",


    RentalShopDesc: "This is a rental website for dresses built with ReactJS, where users can rent outfits or list their own on the platform. It features a user-friendly interface with smooth browsing, responsive design, category-wise filtering, and dynamic form handling. After subscribing to a monthly package, users get access to premium features. The frontend was developed using React functional components and modern CSS for a clean and scalable structure.",
    RentalShopGithub: "https://github.com/creativeall/Rental-Website",

  }

  let show = '';
  if (desc[projectName + 'Github'] === "") {
    show = "none";
  }

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + 'Desc']}
        <br />

        <a style={{ display: show }} href={desc[projectName + 'Github']} target='_blank'>
          <button className='projectbtn'><FaGithub /> Github</button>
        </a>

        <a href={desc[projectName + 'Website']} target='_blank'>
          <button className='projectbtn'><CgFileDocument /> Demo</button>
        </a>
      </div>
    </div>
  )
}

export default ProjectBox
