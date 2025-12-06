

function Navbar() {


  return <nav>
    <ul>

      <a href="#home" ><li>
        <div class="home-icon">
          <i class="fas fa-home fa-2x icon"></i>
        </div>
      </li></a>

      <a href="#profile" ><li className="proficon">
        <div class="profile-icon">
          <i class="fas fa-user fa-2x icon"></i>
        </div>
      </li></a>

      <a href="#education" ><li className="eduicon">
        <div class="education-icon">
          <i class="fas fa-graduation-cap fa-2x icon eduicon">
          </i>
        </div>
      </li></a>

      <a href="#skills" ><li className="skillicon">
        <div class="skills-icon">
          <i class="fas fa-cogs fa-2x icon"></i>
        </div>
      </li></a>

      <a href="#showcase" ><li className="projectsicon">
        <div class="projects-icon">
          <i class="fas fa-briefcase fa-2x icon"></i>
        </div>
      </li></a>

      <a href="#footer" ><li className="cntmeicon">
        <div class="mail-icon">
          <i class="fas fa-sms fa-2x icon"></i>
        </div>
      </li></a>



    </ul>
  </nav>
}

export default Navbar;
