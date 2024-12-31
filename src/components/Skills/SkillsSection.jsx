import React from "react";
import './Skills.css';

function SkillsSection() {
    return (
<section className="skills" id="skills">
  <h2 className="section-title">Skills</h2>
  <div className="skills-grid">
    <div className="skill-item">
      <h3>
        
        <i className="fas fa-code" /> Programming Languages
      </h3>
      <ul>
        <li>
          C++ , Python <i className="fab fa-python" />
        </li>
        <li>Familiar with C#, C , Java </li>
      </ul>
    </div>
    <div className="skill-item">
      <h3>
        <i className="fas fa-laptop-code" /> Web Technologies
      </h3>
      <ul>
        <li>HTML5, CSS3, JavaScript</li>
        <li>
          Django Framework <i className="fab fa-python" />
        </li>
        <li>
          ASP.NET MVC <i className="fab fa-microsoft" />
        </li>
      </ul>
    </div>
    <div className="skill-item">
      <h3>
        <i className="fas fa-vial" /> Testing &amp; Quality
      </h3>
      <ul>
        <li>Robot Framework </li>
        <li>Selenium </li>
        <li>
          ISTQB Foundations (Currently studying)
          <i className="fas fa-graduation-cap" />
        </li>
      </ul>
    </div>
    {/* Other Technologies */}
    <div className="skill-item">
      <h3>
        <i className="fas fa-cogs" /> Other Technologies
      </h3>
      <ul>
        <li>
          Git <i className="fab fa-github" />, Firebase
        </li>
        <li>
          Linux <i className="fab fa-linux" />
        </li>
        <li>
          SQL, SQLite <i className="fas fa-database" />
        </li>
        <li>
          Data Structures &amp; Algorithms
          <i className="fas fa-project-diagram" />
        </li>
        <li>
          Design Patterns &amp; SOLID Principles <i className="fas fa-cogs" />
        </li>
      </ul>
    </div>
  </div>
</section>

    );
}

export default SkillsSection;