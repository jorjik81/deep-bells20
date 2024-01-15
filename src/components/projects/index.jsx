
import projectZeroImage from "../../assets/images/photo (2).jpg";
import projectOneImage from "../../assets/images/projectone.png";
import projectTwoImage from "../../assets/images/projecttwo.png";
import projectThreeImage from "../../assets/images/projectthree.png";
import projectFourImage from "../../assets/images/projectfour.png";
import projectFiveImage from "../../assets/images/projectfive.png";
import projectSixImage from "../../assets/images/projectsix.png";


const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className="content">
        <a target="_blank">
          <div className="firstImg">
            <img src={projectZeroImage} alt="Project zero" />
          </div>
        </a>
        <div className="grid">
          <a href="https://github.com/jorjik81/helpful_structure11">
            <div className="smallImg">
              <img src={projectOneImage} alt="project one" />
              <figcaption className="image-caption">Note Taker(GitHub)</figcaption>
              <div className="links">
                <a href="https://still-basin-58274-25e2407b7d28.herokuapp.com/">Live page</a>
              </div>
            </div>
          </a>
          <a href="https://github.com/jorjik81/Pr2-Recipe-Sharing-Platform">
            <div className="smallImg">
              <img src={projectTwoImage} alt="project two" />
              <figcaption className="image-caption">Recipe Sharing Platform(GitHub)</figcaption>
              <div className="links">
                <a href="https://calm-woodland-04272-511197900832.herokuapp.com/">Live page</a>
              </div>
            </div>
          </a>
          <a href="https://github.com/jorjik81/lonely_desktop21">
            <div className="smallImg">
              <img src={projectThreeImage} alt="project three" />
              <figcaption className="image-caption">Google Book Search(GitHub)</figcaption>
              <div className="links">
                <a href="https://stark-earth-23043-83671f78d796.herokuapp.com/">Live page</a>
              </div>
            </div>
          </a>
          <a href="https://github.com/jorjik81/fluffy_flower2">
            <div className="smallImg">
              <img src={projectFourImage} alt="project four" />
              <figcaption className="image-caption">Personal Website(GitHub)</figcaption>
         
                <div className="links">
                <a href="https://jorjik81.github.io/fluffy_flower2/">Live page</a>
              </div>
            </div>
          </a>
          <a href="https://github.com/jorjik81/outrageous-berry5">
            <div className="smallImg">
              <img src={projectFiveImage} alt="project five" />
              <figcaption className="image-caption">Work Day Scheduler(GitHub)</figcaption>
              <div className="links">
                <a href="https://jorjik81.github.io/outrageous-berry5/">Live page</a>
              </div>
            </div>
          </a>
          <a href="https://github.com/jorjik81/juicy_star4">
            <div className="smallImg">
              <img src={projectSixImage} alt="project six" />
              <figcaption className="image-caption">Timed Quiz(GitHub)</figcaption>
              <div className="links">
                <a href="https://jorjik81.github.io/juicy_star4/">Live page</a>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;