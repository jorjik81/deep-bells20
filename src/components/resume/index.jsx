
const Resume = () => {
  return (
    <div>
      <div className = "resumecontainer">
        <h1>Resume</h1>
        <h2>Giorgi Jorjadze</h2>
        <p>Email: jorjik81@gmail.com</p>
        <p>Phone: +1-6467250599</p>

        <h2>Education</h2>
        <ul className ="list">
          <li>Brooklyn College, Music Education Advanced Certificate - May 2019</li>
          <li>Tbilisi State Conservatory, BM in Performance, Cello - May 2004</li>
        </ul>

        <h2>Teaching Experience</h2>
        <ul className ="list">
          <li>The Sojourner Truth School P.S./M.S. 149 - 2022-present</li>
          <li>Newcomers High School, Music teacher (F status) - 2021-present</li>
          {/* Add more teaching experiences in a similar format */}
        </ul>

        <h2>Orchestral Experience</h2>
        <ul className ="list" >
          <li>Staten Island Philharmonic - 2019-present</li>
          <li>New England Symphony Ensemble - 2017-present</li>
          {/* Add more orchestral experiences in a similar format */}
        </ul>
      </div>
    </div>
    
  )
}

export default Resume
