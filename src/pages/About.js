import React from 'react';
import Me from '../images/Me.jpg';
import Background from '../images/Background.jpg';
import '../styles/About.css';

export default function About() {
  return (
    <section
      className="about-container"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="about-content">

        <h1 className="about-title">About Me</h1>

        <img
          src={Me}
          alt="Jose Del Valle"
          className="profile-picture"
        />

        <h2 className="about-heading">
          Hello, my name is Jose.
        </h2>

        <div className="about-description">
          <p>
            I am a full stack developer based in Orlando with experience
            developing responsive web applications using HTML5, CSS,
            JavaScript, React, Bootstrap, Tailwind, and other modern
            technologies.
          </p>

          <p>
            On the back end, I have experience with Node.js, Express.js,
            MySQL, MongoDB, NoSQL, GraphQL, RESTful APIs, MVC, ORM, and
            object-oriented programming.
          </p>

          <p>
            I have an appetite for continuous learning, collaboration,
            and problem-solving. My goal is to create and maintain
            engaging websites and applications while continuing to grow
            as a developer.
          </p>

          <p>
            Outside of programming, I enjoy music, video games, and
            traveling.
          </p>
        </div>

      </div>
    </section>
  );
}