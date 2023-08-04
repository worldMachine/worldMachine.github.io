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
import WorkCard from "@/components/WorkCard";

import projectsData from "@/data/projects.json";
import workData from "@/data/work.json";

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
  const [colorChange, setColorChange] = useState(false);

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 300) {
        setColorChange(true);
      } else {
        setColorChange(false);
      }
    };

    window.addEventListener("scroll", changeNavbarColor);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleImageClick = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setIsSpinning(false);
    }, 1000);
  };

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

  const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setHideNavbar(window.innerWidth > 800);
    };

    window.addEventListener("resize", handleResize);

    // Check initial screen width on component mount
    handleResize();

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main id="HomeScroll" data-bs-theme="light" style={{ color: "white" }}>
      {!hideNavbar && <CustomNavBar />}

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

            {/* <!--  <Image id="home-pic" src="resources/brady-head.png" className="rounded-circle profile-pic center-block"> */}
            <Image
              id="spin-image"
              src="/resources/brady-head.png"
              alt="Hello there"
              width={200}
              height={200}
              // className="rounded-circle profile-pic rotate-Image"
              className={
                isSpinning
                  ? "rotate rounded-circle profile-pic"
                  : "rounded-circle profile-pic"
              }
              onClick={handleImageClick}
              style={{ cursor: "pointer" }}
            />

            <div className="padding-bottom"></div>
            <h4 className="description padding-bottom white-text">
              Entrepreneur
              <br /> Software Engineer
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
      <div id="EducationScroll" className="container " ref={refEducation}>
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
              <Image
                width={250}
                height={120}
                className="center-block mx-auto left-img larger-icon"
                src="/resources/usc-logo.png"
                alt="usc"
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
              <Image
                width={250}
                height={150}
                className="center-block mx-auto left-img larger-icon"
                src="/resources/sju-logo.png"
                alt="stj"
              />
            </a>
          </div>
          <div className="col-sm-6 justify-content-center align-self-center">
            <h2 className="text-center padding-top">
              <a href="https://www.stjohns.edu" className="link-style">
                St. John&apos;s University
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
      <div id="ProjectsScroll" className="container" ref={refProjects}>
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
              key={index}
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
      <div id="WorkScroll" className="container" ref={refWork}>
        <br />
        <div id="Work" style={{ marginTop: "20px" }}></div>

        {/* <!--  <div id="main" className="container"> */}

        <div className="container text-center page-title padding-bottom">
          <h1>Work</h1>
        </div>

        {workData.map((item, index) => (
          <WorkCard
            key={index}
            id={index}
            imageLink={item.imageLink}
            link={item.link}
            title={item.title}
            description={item.description}
            position={item.position}
            location={item.location}
            years={item.years}
            imageHalfSize={item?.imageHalfSize ?? false}
          />
        ))}
        {/* <!--  row start */}
      </div>
      {/* <!-- 	CONTACT SECTION	*/}
      <div
        className="container text-center"
        ref={refContact}
        style={{ height: "100vh" }}
        id="ContactScroll"
      >
        <div id="Contact" style={{ marginTop: "20px" }}></div>

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
    </main>
  );
}
