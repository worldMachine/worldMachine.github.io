"use client";
import Image from "next/image";
// import styles from "./page.module.css";
// import "@/styles/global.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import $ from "jquery";
import Popper from "popper.js";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import CustomNavBar from "@/components/CustomNavBar";
import CustomSideNav from "@/components/CustomSideNav";
import downArrowLottie from "@/lotties/down-arrow-lottie.json";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/data/projects.json";
import {
  faBriefcase,
  faCode,
  faEnvelope,
  faGraduationCap,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";

config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import LottieAnimation from "@/components/LottieAnimation";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 300) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const [refHome, inViewHome] = useInView({
    triggerOnce: false,
  });
  const [refEducation, inViewEducation] = useInView({
    triggerOnce: false,
    // rootMargin: "250px 0px 0px 0px",
    // threshold: 0.75,
  });
  const [refProjects, inViewProjects] = useInView({ triggerOnce: false });
  const [refWork, inViewWork] = useInView({ triggerOnce: false });
  const [refContact, inViewContact] = useInView({ triggerOnce: false });

  // Add more refs as needed

  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    if (inViewHome) setCurrentSection("Home");
    else if (inViewEducation) setCurrentSection("Education");
    else if (inViewProjects) setCurrentSection("Projects");
    else if (inViewWork) setCurrentSection("Work");
    else if (inViewContact) setCurrentSection("Contact");
    else setCurrentSection("Home");
  }, [inViewHome, inViewEducation, inViewProjects, inViewWork, inViewContact]); // Add more dependencies as needed

  // const registerObserver = useCallback((ref: any, id: any) => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setCurrentSection(id);
  //       }
  //     },
  //     { threshold: 1 }
  //   );

  //   if (ref.current) {
  //     observer.observe(ref.current);
  //   }

  //   return observer; // This line is new
  // }, []);
  // const [ref1, inView1] = useInView({ triggerOnce: false });
  // const [ref2, inView2] = useInView({ triggerOnce: false });
  // // Add more refs as needed

  // const [activeSection, setActiveSection] = useState(null);

  return (
    <main data-bs-theme="light" style={{ color: "white" }}>
      {/* <nav
        id="mobile-nav"
        className="navbar navbar-expand-lg navbar-dark fixed-top my-nav"
      >
        <a className="navbar-brand nav-col" href="#Home">
          KBD
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul id="top-menu" className="navbar-nav mr-auto">
            <li id="" className="nav-item active">
              <a className="nav-link" href="#Home">
                Home
              </a>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <a className="nav-link" href="#Education">
                Education
              </a>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <a className="nav-link" href="#Projects">
                Projects
              </a>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <a className="nav-link" href="#Work">
                Work
              </a>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <a className="nav-link" href="#Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav> */}
      <CustomNavBar />

      <CustomSideNav currentSection={currentSection} />

      {/* <!--  Header section */}
      {/* <span ref={refHome}></span> */}
      <header id="Home" ref={refHome}>
        <video
          id="bg-video"
          playsInline
          muted
          autoPlay
          loop
          className="bg-video"
        >
          <source src="resources/script-type-vid.mp4" type="video/mp4" />
          <source src="resources/script-type-vid.webm" type="video/webm" />
          <source src="resources/script-type-vid.ogg" type="video/ogg" />
        </video>
        <div id="main" className="container padding-bottom">
          <div className="container-fluid text-center page-title padding-top padding-bottom">
            <h1 className="my-name padding-bottom">K. Brady Davis</h1>

            {/* <!--  <img id="home-pic" src="resources/brady-head.png" className="rounded-circle profile-pic center-block"> */}
            <img
              id="home-pic"
              src="resources/brady-head.png"
              className="rounded-circle profile-pic rotate-img"
            />

            <div className="padding-bottom"></div>
            <h4 className="description padding-bottom white-text">
              Software Engineer
            </h4>
          </div>
        </div>
        <div className={colorChange ? "display-none" : "down-arrow-lottie"}>
          <LottieAnimation
            animation={downArrowLottie}
            height={60}
            width={60}
            autoplay={true}
            loop={true}
          />
        </div>
      </header>

      {/* <!-- 	EDUCATION SECTION*/}
      <div className="container " ref={refEducation}>
        <br />
        <div id="Education"></div>

        {/* <!--  <div id="main" className="container"> */}

        <div className="container text-center page-title padding-bottom education-section">
          <h1>Education</h1>
        </div>

        {/* <!--  <div className="padding-bottom"> */}
        {/* <!--  <div className="container-fluid "> */}
        <div className="row">
          <div className="col-sm-6">
            <a href="https://www.usc.edu">
              <img
                className="center-block mx-auto left-img larger-icon"
                src="resources/usc-logo.png"
              />
            </a>
          </div>
          <div className="col-sm-6 justify-content-center align-self-center">
            <h2 className="text-center padding-top">
              <a href="https://www.usc.edu" className="link-style">
                University of Southern California
              </a>
            </h2>
            <h4 className="text-center">
              MS Computer Science: <br />
              Software Engineering
            </h4>
            <p className="text-center">Los Angeles, California | May 2020</p>
          </div>
        </div>
        {/* <!--  </div> */}
        <div className="padding-bottom"></div>

        {/* <!--  <div className=""> */}
        {/* <!--  <div className="container-fluid "> */}
        <div className="row">
          <div className="col-sm-6">
            <a href="https://www.stjohns.edu">
              <img
                className="center-block mx-auto left-img larger-icon"
                src="resources/sju-logo.png"
              />
            </a>
          </div>
          <div className="col-sm-6 justify-content-center align-self-center">
            <h2 className="text-center padding-top">
              <a href="https://www.stjohns.edu" className="link-style">
                St. John's University
              </a>
            </h2>
            <h4 className="text-center">BS Computer Science</h4>
            <p className="text-center">New York, New York | May 2018</p>
          </div>
        </div>
        {/* <!--  </div> */}
        <div className="padding-bottom"></div>
      </div>

      {/* <!--  Projects Section */}
      <div className="container" ref={refProjects}>
        <br />
        <div id="Projects" style={{ marginTop: "20px" }}></div>

        {/* <!--  <div id="main" className="container"> */}

        <div className="container text-center page-title padding-bottom">
          <h1>Projects</h1>
        </div>
        <div className="row">
          {/* <!--  Start  */}

          {projectsData.map((item, index) => (
            <ProjectCard
              id={index}
              imageLink={item.imageLink}
              link={item.link}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
      {/* <!--  Work Section New */}
      <div className="container" ref={refWork}>
        <br />
        <div id="Work" style={{ marginTop: "20px" }}></div>

        {/* <!--  <div id="main" className="container"> */}

        <div className="container text-center page-title padding-bottom">
          <h1>Work</h1>
        </div>

        {/* <!--  row start */}
        <div className="row">
          <div className="col-md-7">
            <div className="card-img-container">
              <a href="https://cloudsurfsoftware.com/">
                <img
                  className="img-fluid rounded mb-3 mb-md-0 center-block"
                  src="https://media-hosting-bucket.s3.us-west-2.amazonaws.com/kbradydavis/cloudsurf.svg"
                  alt=""
                  // style={"width: 100%"}
                />
              </a>
            </div>
          </div>
          <div className="col-md-5 mt-3">
            <a href="https://cloudsurfsoftware.com/">
              <h3>CloudSurf Software</h3>
            </a>
            <h4>Founder, CEO</h4>
            <p>Las Vegas, NV</p>
            <p>2020 - Present</p>

            <p>
              Improve your business with software. Whether you need an app or
              website for your company, advanced software solution or enhanced
              web presence, CloudSurf can build whatever your business needs to
              succeed.
            </p>
          </div>
        </div>
        <hr />
        {/* <!--  row end */}

        {/* <!--  row start */}
        <div className="row">
          <div className="col-md-7">
            <div className="card-img-container">
              <a href="https://www.parrotfinance.io/">
                <img
                  className="img-fluid rounded mb-3 mb-md-0 center-block"
                  src="https://media-hosting-bucket.s3.us-west-2.amazonaws.com/kbradydavis/parrot-logo.svg"
                  alt=""
                  // style="width: 100%"
                />
              </a>
            </div>
          </div>
          <div className="col-md-5 mt-3">
            <a href="https://www.parrotfinance.io/">
              <h3>Staax</h3>
            </a>
            <h4>Founding Engineer</h4>
            <p>San Francisco, CA</p>
            <p>2023 - Present</p>

            <p>Invest in stocks, mimic trades and join the flock!</p>
          </div>
        </div>
        <hr />
        {/* <!--  row end */}

        {/* <!--  row start */}
        <div className="row">
          <div className="col-md-7">
            <div className="card-img-container">
              <a href="https://staaxapp.com/">
                <img
                  className="img-fluid rounded mb-3 mb-md-0 center-block"
                  src="https://media-hosting-bucket.s3.us-west-2.amazonaws.com/kbradydavis/staax-logo.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="col-md-5 mt-3">
            <a href="https://staaxapp.com/">
              <h3>Staax</h3>
            </a>
            <h4>Founding Engineer</h4>
            <p>San Francisco, CA</p>
            <p>2022 - Present</p>
            <p>
              Staax makes investing as easy as receiving payments from your
              friends.
            </p>
          </div>
        </div>
        <hr />
        {/* <!--  row end */}

        {/* <!--  row start */}
        <div className="row">
          <div className="col-md-7">
            <div className="card-img-container">
              <a href="https://github.com/customer-stories/mgm-resorts">
                <img
                  className="img-fluid rounded mb-3 mb-md-0 center-block"
                  src="https://media-hosting-bucket.s3.us-west-2.amazonaws.com/kbradydavis/mgm-logo.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="col-md-5 mt-3">
            <a href="https://github.com/customer-stories/mgm-resorts">
              <h3>MGM Resorts International</h3>
            </a>
            <h4>Software Engineering Intern</h4>
            <p>Las Vegas, NV | June 2019 - August 2019</p>
            <p>
              Managed, designed and developed real-time, serverless, pub/sub
              system for MGM Resorts app that implemented geofencing and sent
              location-based ads and offers via push notification, SMS and
              digital signs using Azure, Java, Redis and Node.js.
            </p>
          </div>
        </div>
        <hr />
        {/* <!--  row end */}

        {/* <!--  Project Two */}
        <div className="row">
          <div className="col-md-7">
            <div className="card-img-container-2">
              <a href="https://burg.community/">
                <img
                  className="img-fluid rounded mb-3 mb-md-0 center-block"
                  src="https://media-hosting-bucket.s3.us-west-2.amazonaws.com/kbradydavis/burg-logo-inverted.png"
                  alt="burg logo"
                />
              </a>
            </div>
          </div>
          <div className="col-md-5 mt-3">
            <a href="https://burg.community/" target="_blank">
              <h3>The Burg</h3>
            </a>
            <h4>Backend Development Intern</h4>
            <p>Los Angeles, CA | December 2018 - February 2019</p>
            <p>
              Developed location-based news web scraper for the News section of
              The Burg app for thousands of users using Node.js, Express, AWS,
              JavaScript and MySQL.
            </p>
          </div>
        </div>
        {/* <!--  /.row */}

        <hr />

        {/* <!--  Project Three */}
        <div className="row">
          <div className="col-md-7">
            <a href="https://p1group.com/">
              <div className="logo-container">
                <img
                  className="img-fluid rounded mb-3 mb-md-0 center-block"
                  src="https://media-hosting-bucket.s3.us-west-2.amazonaws.com/kbradydavis/p1-logo.png"
                  alt="p1 logo"
                  //   style="
                  //   height: 200px;
                  //   display: block;
                  //   margin-left: auto;
                  //   margin-right: auto;
                  // "
                />
              </div>
            </a>
          </div>
          <div className="col-md-5 mt-3">
            <a href="https://p1group.com/">
              <h3>P1 Group</h3>
            </a>
            <h4>Project Engineer</h4>
            <p>Las Vegas, NV | May 2017 - September 2018</p>
            <p>
              Implemented scripts to automate naming and sorting of thousands
              construction project documents and models using Python, OCR and
              Bluebeam.
            </p>
          </div>
        </div>
        {/* <!--  /.row */}

        <hr />

        {/* <!--  Project Four */}
        <div className="row">
          <div className="col-md-7">
            <a href="https://slconnected.com/">
              <div className="logo-container">
                <img
                  className="img-fluid rounded mb-3 mb-md-0 center-block"
                  src="https://media-hosting-bucket.s3.us-west-2.amazonaws.com/kbradydavis/slconnected-logo.png"
                  alt=""
                  //   style="
                  //   height: 200px;
                  //   display: block;
                  //   margin-left: auto;
                  //   margin-right: auto;
                  // "
                />
              </div>
            </a>
          </div>
          <div className="col-md-5 mt-3">
            <a href="https://slconnected.com/">
              <h3>SLConnected</h3>
            </a>
            <h4>Software Developer and Partner</h4>
            <p>Salt Lake City, UT | May 2016 - May 2017</p>
            <p>
              Created custom, business-facing java web apps to automate business
              processes for clients using Java, Tomcat, and PostgreSQL.
            </p>
          </div>
        </div>
        {/* <!--  /.row */}

        <hr />

        {/* <!--  Project Five */}
        <div className="row">
          <div className="col-md-7">
            <a href="http://southlandind.com/">
              <div
                className="logo-container"
                // style="padding-top: 75px; padding-bottom: 75px"
              >
                <img
                  className="img-fluid rounded mb-3 mb-md-0 center-block"
                  src="https://media-hosting-bucket.s3.us-west-2.amazonaws.com/kbradydavis/southland-logo.png"
                  alt=""
                  //   style="
                  //   width: auto;
                  //   display: block;
                  //   margin-left: auto;
                  //   margin-right: auto;
                  // "
                />
              </div>
            </a>
          </div>
          <div className="col-md-5 mt-3">
            <a href="http://southlandind.com/">
              <h3>Southland Industries</h3>
            </a>
            <h4>Building Information Modeling Support Specialist</h4>
            <p>Las Vegas, NV | June 2016 - August 2016</p>
            <p>
              Designed, corrected and synchronized 3D models of mechanical
              systems from various subcontractors and automated BIM processes
              for large scale construction projects using Revit, AutoCAD and
              Python.
            </p>
          </div>
        </div>
        {/* <!--  /.row */}

        <hr />
      </div>
      {/* <!-- 	CONTACT SECTION	*/}
      <div id="Contact" className="container text-center" ref={refContact}>
        {/* <!--  <div className="padding-bottom"></div> */}
        {/* <!--  <div className="container text-center page-title"></div> */}
        <div className="padding-bottom"></div>
        <h1 className="page-title">Contact</h1>

        <div className="container">
          <div className="contact-icons">
            <div className="padding-bottom text-center">
              <a
                href="mailto: brady@cloudsurfsoftware.com"
                className="contact-icon"
              >
                {/* <i className="fa fa-envelope fa-3x"></i> */}
                <FontAwesomeIcon icon={faEnvelope} size="3x" />
              </a>
            </div>
            <div className="padding-bottom text-center">
              <a
                href="https://github.com/worldMachine"
                className="contact-icon"
              >
                {/* <i className="fa fa-github fa-3x"></i> */}
                <FontAwesomeIcon icon={faGithub} size="3x" />
              </a>
            </div>
            <div className="text-center ten-padding-bottom">
              <a
                href="https://www.linkedin.com/in/kbradydavis/"
                className="contact-icon"
              >
                {/* <i className="fa fa-linkedin fa-3x"></i> */}
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <script type="text/javascript" src="/static/main.js"></script>
      <script type="text/javascript" src="/static/scroll.js"></script>
    </main>
  );
}
