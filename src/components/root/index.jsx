import React from 'react'
import {Link,Outlet} from "react-router-dom"
import "./navbar.css"
const Root = () => {
  return (
    <div>
      <ul className="Nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
      
      <Outlet/>
      <section class="about-section">
      <img src="./src/assets/images/333.jpg" alt="background image"/>
      
          <div className="about-overlay">
            <div class="heading">
                <h1>About Me</h1>
            </div>
            <div class="content">
                <p>Giorgi Jorjadze, the accomplished cellist from Georgia who has embraced Brooklyn as his home,
                    is a true renaissance soul. Beyond his musical endeavors as a performer, teacher, and luthier,
                    Giorgi has delved into the world of coding and found a new passion. Embracing the art of programming,
                    he now spends his time exploring the intricacies of coding languages and software development.
                    With the same dedication and enthusiasm that he brings to his music, Giorgi has found joy in this new
                    creative outlet,
                    broadening his horizons and adding another dimension to his already diverse skill set.
                    As he continues to nurture his love for music, photography, cooking, and now coding,
                    Giorgi exemplifies a life enriched by embracing various forms of art and expression.
                </p>
            </div>
            </div>  
        </section>
    </div>
  )
}

export default Root

