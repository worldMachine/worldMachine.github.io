import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  faBriefcase,
  faCode,
  faEnvelope,
  faGraduationCap,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

function CustomSideNav({ currentSection }) {
  return (
    <div id="sidenav" className="sidenav text-center">
      <a
        href="#Home"
        style={currentSection === "Home" ? { color: "green" } : null}
      >
        {/* <i className="fa fa-home"></i> */}
        <FontAwesomeIcon icon={faHome} />
      </a>

      <a
        href="#Education"
        style={currentSection === "Education" ? { color: "green" } : null}
      >
        {/* <i className="fa fa-graduation-cap"></i> */}
        <FontAwesomeIcon icon={faGraduationCap} />
      </a>
      <a
        href="#Projects"
        style={currentSection === "Projects" ? { color: "green" } : null}
      >
        {/* <i className="fa fa-code"></i> */}
        <FontAwesomeIcon icon={faCode} />
      </a>

      <a
        href="#Work"
        style={currentSection === "Work" ? { color: "green" } : null}
      >
        {/* <i className="fa fa-briefcase"></i> */}
        <FontAwesomeIcon icon={faBriefcase} />
      </a>
      <a
        href="#Contact"
        style={currentSection === "Contact" ? { color: "green" } : null}
      >
        {/* <i className="fa fa-envelope"></i> */}
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  );
}

export default CustomSideNav;
