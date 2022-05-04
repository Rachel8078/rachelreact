import React from 'react';
import photo from "../../assets/assassination.png";

function Project(props) {
  const currentProject = {
    name: "Assassination",
    description: "Game",
  };

  return (
    <section>
      <h1>{currentProject.name}</h1>
      <p>{currentProject.description}</p>
      <div>
        <img src={photo} alt="Assassination Game app" className=""/>
      </div>
    </section>
  );
}

export default Project;