import React from 'react';
import Image from 'react-bootstrap/Image';

import Mosaic from '../images/mosaic-digital-creations.png';
import SEO from '../images/SEO.jpg';
import Journeez from '../images/Journeez.jpg';
import Weather from '../images/weather-forecast.jpg';
import Winery from '../images/Winery.jpg';

import '../styles/Projects.css';
import '../App.css';

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaJs,
} from 'react-icons/fa';

import { DiBootstrap } from 'react-icons/di';


const projects = [
  {
    image: Mosaic,
    name: 'Mosaic',
    category: 'Full Stack',
    description:
      'Mosaic Digital Creations is a digital solutions platform focused on helping small businesses establish and grow their online presence through professional website development, SEO, and digital marketing services. The project combines responsive front-end design with scalable web technologies to create modern, user-focused digital experiences.',
    technologies: [
      <FaReact />,
      <FaHtml5 />,
      <FaCss3 />,
      <FaJs />,
      'Express',
    ],
    githubLink:
      'https://github.com/jdelvalle12/mosaic',
    liveLink:
      'https://mosaicdigitalcreations.com',
  },

  {
    image: Journeez,
    name: 'JourneEZ',
    category: 'Full Stack',
    description:
      'A travel application designed to help travelers discover destinations, organize trips, connect with other travelers, and document their experiences.',
    technologies: [
      <FaReact />,
      <FaNodeJs />,
      <FaHtml5 />,
      <FaCss3 />,
      <FaJs />,
      <DiBootstrap />,
      'GraphQL',
    ],
    githubLink:
      'https://github.com/jdelvalle12/journeeztrip',
    liveLink:
      'https://www.journeeztrip.com/',
  },

  {
    image: Weather,
    name: 'Weather Forecast',
    category: 'Frontend',
    description:
      'A weather dashboard that retrieves current weather conditions and forecasts for searched locations using an API.',
    technologies: [
      <FaHtml5 />,
      <FaCss3 />,
      <FaJs />,
    ],
    githubLink:
      'https://github.com/jdelvalle12/5-day-national-weather-forecast',
    liveLink:
      'https://jdelvalle12.github.io/5-day-national-weather-forecast/',
  },

  {
    image: SEO,
    name: 'Horiseon',
    category: 'Frontend',
    description:
      'A website focused on semantic HTML, accessibility, responsive design, and search engine optimization.',
    technologies: [
      <FaHtml5 />,
      <FaCss3 />,
    ],
    githubLink:
      'https://github.com/jdelvalle12/horiseon-webpage',
    liveLink:
      'https://jdelvalle12.github.io/horiseon-webpage/',
  },

  {
    image: Winery,
    name: 'The Valley Winery',
    category: 'Frontend',
    description:
      'A responsive winery website demonstrating front-end design, layout, navigation, and responsive development.',
    technologies: [
      <FaHtml5 />,
      <FaCss3 />,
    ],
    githubLink:
      'https://github.com/jdelvalle12/thevalleywinery',
    liveLink:
      'https://jdelvalle12.github.io/thevalleywinery/',
  },
];


const Projects = () => {
  return (
    <main className="projects-page">

      <section className="projects-content">

        {/* Page Heading */}
        <div className="projects-title">
          <p>MY WORK</p>

          <h1>Projects</h1>

          <span>
            A selection of applications and websites I've developed.
          </span>
        </div>


        {/* Project Grid */}
        <div className="projects-grid">

          {projects.map((project) => (

            <article
              className="project-card"
              key={project.name}
            >

              {/* Project Image */}
              <div className="project-image-container">

                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-image-link"
                  aria-label={`View ${project.name} live site`}
                >

                  <Image
                    src={project.image}
                    alt={`${project.name} project screenshot`}
                    className="project-image"
                  />

                  {/* Hover Overlay */}
                  <div className="project-image-overlay">

                    <h2>
                      {project.name}
                    </h2>

                    <span>
                      View Live Site →
                    </span>

                  </div>

                </a>

              </div>


              {/* Project Information */}
              <div className="project-info">

                <span className="project-category">
                  {project.category}
                </span>

                <h2>
                  {project.name}
                </h2>

                <p className="project-description">
                  {project.description}
                </p>


                {/* Technologies */}
                <div className="project-technologies">

                  <h3>
                    Technologies
                  </h3>

                  <div className="technology-list">

                    {project.technologies.map(
                      (technology, index) => (

                        <span
                          className="technology-icon"
                          key={index}
                        >
                          {technology}
                        </span>

                      )
                    )}

                  </div>

                </div>


                {/* Project Links */}
                <div className="project-buttons">

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button github-button"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button live-button"
                  >
                    Live Site
                  </a>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>

    </main>
  );
};


export default Projects;