 
import ProjectBox from '../Components/ProjectBox';
import textConverterImage from '../images/textConverterImage.png';
import instaVibeImage from '../images/instaVibeImage.png';
import rentalImage from '../images/rentalImage.png';
import ShowMeeImage from '../images/showmee.png';

const Projects = () => {
  return (
    <div id="projects">
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={rentalImage} projectName="RentalShop" />
        <ProjectBox projectPhoto={instaVibeImage} projectName="InstaVibe" />
        <ProjectBox projectPhoto={textConverterImage} projectName="TextConverter" />
        <ProjectBox projectPhoto={ShowMeeImage} projectName="ShowMee" />
      </div>

    </div>
  )
}

export default Projects
