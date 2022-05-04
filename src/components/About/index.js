import React from 'react';
import headshot from "../../assets/headshot.JPG";

function About() {
  return (
  <section className="my-5">
    <h1 id="about">About Me</h1>
    <img src={headshot} className="my-2" style={{ width: "50%" }} alt="picture of Rachel" />
    <div>
      <p>Hi, my name is Rachel Marriott. I am a web developer with experience in HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, Mongoose, MySQL, Sequelize....
        
      </p>
    </div>
  </section>
  );
}

export default About;