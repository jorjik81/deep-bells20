import React from 'react';

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className="content">
        <a target="_blank" href="https://drive.google.com/drive/folders/0B8yFFDpT3LJVRV9oTk0wWTN1dDQ?resourcekey=0-MLqd64Yc5aFNXoUxYF322Q&usp=sharing">
          <div className="firstImg">
            <img src="./src/assets/images/photo (2).jpg" alt="Project zero" />
            <figcaption className="image-caption">Photography Works</figcaption>
          </div>
        </a>
        <div className="grid">
          <a href="https://www.youtube.com/@Giorgijorjadze/featured">
            <div className="smallImg">
              <img src="./src/assets/images/tape.jpg" alt="project one" />
              <figcaption className="image-caption">My Youtube Channel</figcaption>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/giorgi-jorjadze-7189a862/">
            <div className="smallImg">
              <img src="./src/assets/images/333.jpg" alt="project two" />
              <figcaption className="image-caption">My LinkedIn</figcaption>
            </div>
          </a>
          <a href="https://github.com/jorjik81">
            <div className="smallImg">
              <img src="./src/assets/images/neuron.jpg" alt="project three" />
              <figcaption className="image-caption">My GitHub</figcaption>
            </div>
          </a>
          <a href="https://github.com/BrandonERivera/frontendprobject-1">
            <div className="smallImg">
              <img src="./src/assets/images/view.webp" alt="project four" />
              <figcaption className="image-caption">My Project</figcaption>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
