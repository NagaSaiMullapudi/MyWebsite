import React, { useState, useEffect } from "react";
import profilePhoto from "../images/Photo.jpg";
import "../styles/Home.css";
import EducationCard from "./EducationCard";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";

function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [typingIndex, setTypingIndex] = useState(0);
  const [typingText, setTypingText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [textPhrases] = useState([
    "Frontend Developer",
    "Designer",
    "Web Developer",
    "Learner",
  ]);

  const skills = [
    { name: "Java", proficiency: 95 },
    { name: "HTML", proficiency: 90 },
    { name: "CSS", proficiency: 90 },
    { name: "React", proficiency: 75 },
    { name: "JavaScript", proficiency: 75 },
    { name: "MySQL", proficiency: 80 },
    { name: "PowerBi", proficiency: 80 },
    { name: "Linux", proficiency: 50 },
  ];

  const interpersonalSkills = [
    { name: "Communication", proficiency: 85 },
    { name: "Teamwork", proficiency: 70 },
    { name: "Creativity", proficiency: 80 },
    { name: "Problem Solving", proficiency: 91 },
  ];

  const educationData = [
    {
      year: "2019 - 2023",
      degree: "Bachelor of Technology (B.Tech)",
      institution: "Jawaharlal Nehru Technological University",
      grade: "9.50",
    },
    {
      year: "2017 - 2019",
      degree: "Intermediate (10 + 2)",
      institution: "Aditya Junior College",
      grade: "9.92",
    },
    {
      year: "2016 - 2017",
      degree: "Higher Secondary School",
      institution: "VBM High School",
      grade: "First  Class Distinction",
    },
  ];

  const Skill = ({ name, proficiency }) => {
    return (
      <div className="skill">
        <div className="skillName">
          {name} {proficiency}%
        </div>
        <div className="progressContainer">
          <div
            className="progressBar"
            style={{ width: `${proficiency}%` }}
          ></div>
        </div>
      </div>
    );
  };

  const Project = ({ title, description, technology, period, link }) => (
    <div className="myproject">
      <h2>{title}</h2>
      <h3>{period}</h3>
      <p className="projectTechnology">Technology Stack : {technology}</p>
      <p className="projectdescription">{description}</p>

      <a href={link}>View Project</a>
    </div>
  );

  const projects = [
    {
      title: "Bike Loan Portal",
      period: "Feb 2023 to July 2023  ",
      technology: "React js, ASP .Net, MySQL",
      description: "Description of Project 1",
      link: "https://example.com/project1",
    },
    {
      title: "Project 2",
      period: "Dec 2022 to April 2023",
      technology: "Python, Machine Learning",
      description: "Description of Project 2",
      link: "https://example.com/project2",
    },
  ];

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      handleTyping();
    }, typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [typingText, typingIndex, isDeleting, typingSpeed]);

  const handleTyping = () => {
    const currentText = textPhrases[typingIndex];
    const currentIndex = typingText.length;

    if (!isDeleting) {
      // Typing
      setTypingText(currentText.substring(0, currentIndex + 1));
    } else {
      // Deleting
      setTypingText(currentText.substring(0, currentIndex - 1));
    }

    setTypingSpeed(isDeleting ? 50 : 100);

    if (!isDeleting && typingText === currentText) {
      // Start deleting
      setIsDeleting(true);
    } else if (isDeleting && typingText === "") {
      setTypingIndex((prevIndex) => (prevIndex + 1) % textPhrases.length);
      setIsDeleting(false);
    }
  };

  const showResume = () => {
    window.open(
      "https://saikrishnapataballa.github.io/saikrishnapataballa/resume.pdf",
      "_blank"
    );
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const buffer = 80;

    const sections = [
      { id: "home", top: 0, bottom: 0 },
      { id: "about", top: 0, bottom: 0 },
      { id: "skills", top: 0, bottom: 0 },
      { id: "education", top: 0, bottom: 0 },
      { id: "projects", top: 0, bottom: 0 },
      { id: "contact", top: 0, bottom: 0 },
    ];

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        section.top = element.offsetTop - buffer;
        section.bottom = element.offsetTop + element.offsetHeight - buffer;
      }
    });

    const scrollTop = window.scrollY + buffer;

    sections.forEach((section) => {
      if (scrollTop >= section.top && scrollTop < section.bottom) {
        setActiveSection(section.id);
      }
    });
  };

  return (
    <div>
      <div className="navbar">
        <a href="#" className="nav-logo">
          Rajeswari
          <span> Saladi</span>
        </a>
        <nav className="nav-items">
          <a
            className={activeSection === "home" ? "active" : ""}
            href="#home"
            onClick={() => setActiveSection("home")}
          >
            Home
          </a>

          <a
            className={activeSection === "about" ? "active" : ""}
            href="#about"
            onClick={() => setActiveSection("about")}
          >
            About
          </a>

          <a
            className={activeSection === "skills" ? "active" : ""}
            href="#skills"
            onClick={() => setActiveSection("skills")}
          >
            Skills
          </a>

          <a
            className={activeSection === "education" ? "active" : ""}
            href="#education"
            onClick={() => setActiveSection("education")}
          >
            Education
          </a>

          <a
            className={activeSection === "projects" ? "active" : ""}
            href="#projects"
            onClick={() => setActiveSection("projects")}
          >
            Projects
          </a>

          <a
            className={activeSection === "contact" ? "active" : ""}
            href="#contact"
            onClick={() => setActiveSection("contact")}
          >
            Contact
          </a>
        </nav>
      </div>
      <section id="home" className="homeSection">
        <div className="homeContent">
          <div className="contentContainer">
            <h3>Hello, Iam</h3>
            <h1>Raja Rajeswari Saladi</h1>
            <h3>And I'm a </h3>
            <p className="typingAnimation">
              {typingText}
              <span className="cursor"></span>
            </p>
            <button className="resumeButton" onClick={showResume}>
              Download CV
            </button>
          </div>
          <div className="imageContainer">
            <img src={profilePhoto} alt="Your Photo" className="profilePhoto" />
          </div>
        </div>
      </section>
      <section id="about" className="aboutSection">
        <h2 className="aboutSectionHeader">
          About <span>Me</span>
        </h2>
        <hr className="sectionDivider" />
        <div className="aboutContent">
          <div>
            <img
              src={profilePhoto}
              alt="Your Photo"
              className="profilePhotoAbout"
            />
          </div>
          <div className="aboutMatter">
            <h3 className="typingAnimation">
              <span className="im-in-about">I'm a</span> {typingText}{" "}
              <span className="cursor"></span>
            </h3>

            <p>
              A Computer Science Engineer and dedicated learner with extensive
              knowledge of Computer Science concepts and creative Web Designer.
              A budding web developer passionate about crafting engaging user
              experiences with hands-on experience in React.js, ASP .NET, and
              database management.
            </p>
            <div className="aboutInterests">
              <p>
                <strong>Profile:</strong> Software Development
              </p>
              <p>
                <strong>Domain:</strong> Web Development
              </p>
              <p>
                <strong>Education:</strong> Bachelor of Technology (B.Tech)
              </p>
              <p>
                <strong>Interests:</strong> Travelling, Information Gathering,
                Reading
              </p>
              <p>
                <strong>Languages Known:</strong> English, Telugu, Hindi
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="skillSection">
        <h2 className="skillSectionHeader">
          My <span>Skills</span>
        </h2>
        <hr className="sectionDivider" />
        <div className="totalSkills">
          <div className="skillList1">
            <h2 className="skillHeading1">Technical Skills</h2>
            {skills.map((skill, index) => (
              <Skill
                key={index}
                name={skill.name}
                proficiency={skill.proficiency}
              />
            ))}
          </div>
          <div className="skillList2">
            <h2 className="skillHeading2">Interpersonal Skills</h2>
            <div className="interpersonalSkills">
              {interpersonalSkills.map((skill, index) => (
                <div className="interpersonalSkill" key={index}>
                  <div className="skillName">{skill.name}</div>
                  <div className="circleProgressBar">
                    <svg viewBox="0 0 100 100">
                      <circle className="progressBg" cx="50" cy="50" r="40" />
                      <circle
                        className="progressFill"
                        cx="50"
                        cy="50"
                        r="40"
                        style={{
                          strokeDasharray: `${
                            (2 * Math.PI * 40 * skill.proficiency) / 100
                          } ${2 * Math.PI * 40}`,
                          transform: "rotate(-90deg)",
                          transformOrigin: "center",
                        }}
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="education">
        <h2 className="educationSectionHeader">Education</h2>
        <hr className="sectionDivider" />
        <div className="educationCardsContainer">
          {educationData.map((education, index) => (
            <EducationCard key={index} {...education} />
          ))}
        </div>
      </section>
      <section id="projects">
        <h2 className="projectsSectionHeader">Projects</h2>
        <hr className="sectionDivider" />
        <div className="projectsList">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </section>
      <section id="contact">
        <h2 className="contactSectionHeader">
          <span>Contact </span>Me
        </h2>
        <hr className="sectionDivider" />
        <p className="contactText">Below are the details to reach out to me!</p>
        <div className="contactList">
          <p className="contactInfo1">
            <a
              href="https://www.linkedin.com/in/raja-rajeswari-saladi-142502213"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <h4>Linked In</h4>{" "}
            <a href="https://www.linkedin.com/in/raja-rajeswari-saladi-142502213">
              Click here for my Profile
            </a>
          </p>{" "}
          <p className="contactInfo2">
            <a
              href="rajarajeswarisaladi10@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>
            <h4>Email</h4>{" "}
            <a href="rajarajeswarisaladi10@gmail.com">
              rajarajeswarisaladi10@gmail.com
            </a>
          </p>{" "}
          <p className="contactInfo3">
            <a href="8341578902" target="_blank" rel="noopener noreferrer">
              <FaPhone />
            </a>
            <h4>Mobile</h4> <a href="8341578902">+91 8341578902</a>
          </p>{" "}
          <p className="contactInfo4">
            <FaMapMarkerAlt /> <h4>Address</h4>East Godavari, Andhra Pradesh,
            IND
          </p>{" "}
        </div>
      </section>
    </div>
  );
}

export default Home;
