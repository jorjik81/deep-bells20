
import projectZeroImage from "../../assets/images/photo (2).jpg";
import projectOneImage from "../../assets/images/tape.jpg";
import projectTwoImage from "../../assets/images/333.jpg";
import projectThreeImage from "../../assets/images/neuron.jpg";
import projectFourImage from "../../assets/images/view.webp";


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
          <a href="https://www.youtube.com/@Giorgijorjadze/featured">
            <div className="smallImg">
              <img src={projectOneImage} alt="project one" />
              <figcaption className="image-caption">My Youtube Channel</figcaption>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/giorgi-jorjadze-7189a862/">
            <div className="smallImg">
              <img src={projectTwoImage} alt="project two" />
              <figcaption className="image-caption">My LinkedIn</figcaption>
            </div>
          </a>
          <a href="https://github.com/jorjik81">
            <div className="smallImg">
              <img src={projectThreeImage} alt="project three" />
              <figcaption className="image-caption">My GitHub</figcaption>
            </div>
          </a>
          <a href="https://github.com/BrandonERivera/frontendprobject-1">
            <div className="smallImg">
              <img src={projectFourImage} alt="project four" />
              <figcaption className="image-caption">My Project</figcaption>
            </div>
          </a>
          <a href="https://github.com/jorjik81">
            <div className="smallImg">
              <img src={projectThreeImage} alt="project three" />
              <figcaption className="image-caption">My GitHub</figcaption>
            </div>
          </a>
          <a href="https://github.com/BrandonERivera/frontendprobject-1">
            <div className="smallImg">
              <img src={projectFourImage} alt="project four" />
              <figcaption className="image-caption">My Project</figcaption>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;