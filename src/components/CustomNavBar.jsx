// import { faHamburger } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState } from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

// function CustomNavBar() {
//   const [colorChange, setColorchange] = useState(false);
//   const changeNavbarColor = () => {
//     if (window.scrollY >= 700) {
//       setColorchange(true);
//     } else {
//       setColorchange(false);
//     }
//   };
//   window.addEventListener("scroll", changeNavbarColor);

//   const handleNavItemClick = (event, targetId) => {
//     event.preventDefault();
//     const targetElement = document.getElementById(targetId);
//     const navbarHeight = document.querySelector(".navbar").offsetHeight;
//     if (targetElement) {
//       const targetPosition =
//         targetElement.getBoundingClientRect().top + window.scrollY;
//       const offsetPosition = targetPosition - navbarHeight;
//       window.scrollTo({ top: offsetPosition, behavior: "smooth" });
//     }
//     closeNavbar();
//   };

//   const closeNavbar = () => {
//     const navbarToggler = document.querySelector(".navbar-toggler");
//     if (navbarToggler) {
//       navbarToggler.click();
//     }
//   };

//   return (
//     <Navbar
//       expand="lg"
//       className={
//         colorChange
//           ? "navbar navbar-expand-lg navbar-dark fixed-top my-nav-black"
//           : "navbar navbar-expand-lg navbar-dark fixed-top my-nav"
//       }
//       // className="navbar navbar-expand-lg navbar-dark fixed-top my-nav"
//       style={{ color: "white !important" }}
//       sticky="top"
//       id="mobile-nav"
//     >
//       <Container>
//         <Navbar.Brand href="#home">
//           <a className="navbar-brand nav-col" href="#Home">
//             KBD
//           </a>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav">
//           <FontAwesomeIcon icon={faHamburger} />
//         </Navbar.Toggle>

//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav id="top-menu" className="navbar-nav mr-auto">
//             <Nav.Link
//               href="#Home"
//               onClick={(e) => handleNavItemClick(e, "Home")}
//             >
//               Home
//             </Nav.Link>
//             <Nav.Link
//               href="#Education"
//               onClick={(e) => handleNavItemClick(e, "EducationScroll")}
//             >
//               Education{" "}
//             </Nav.Link>
//             <Nav.Link
//               href="#Projects"
//               onClick={(e) => handleNavItemClick(e, "Projects")}
//             >
//               Projects{" "}
//             </Nav.Link>
//             <Nav.Link
//               href="#Work"
//               onClick={(e) => handleNavItemClick(e, "Work")}
//             >
//               Work{" "}
//             </Nav.Link>
//             <Nav.Link
//               href="#Contact"
//               onClick={(e) => handleNavItemClick(e, "Contact")}
//             >
//               Contact{" "}
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default CustomNavBar;

import { faHamburger, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function CustomNavBar() {
  const [colorChange, setColorchange] = useState(false);

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 700) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    };

    window.addEventListener("scroll", changeNavbarColor);

    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  const handleNavItemClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    if (targetElement) {
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = targetPosition - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    closeNavbar();
  };

  const closeNavbar = () => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    if (navbarToggler) {
      navbarToggler.click();
    }
  };

  return (
    <Navbar
      expand="lg"
      className={
        colorChange
          ? "navbar navbar-expand-lg navbar-dark fixed-top my-nav-black"
          : "navbar navbar-expand-lg navbar-dark fixed-top my-nav"
      }
      style={{ color: "white !important" }}
      sticky="top"
      id="mobile-nav"
    >
      <Container>
        <Navbar.Brand href="#home">
          <a className="navbar-brand nav-col" href="#Home">
            KBD
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FontAwesomeIcon icon={faBars} />
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav id="top-menu" className="navbar-nav mr-auto">
            <Nav.Link
              href="#Home"
              onClick={(e) => handleNavItemClick(e, "Home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#Education"
              onClick={(e) => handleNavItemClick(e, "EducationScroll")}
            >
              Education
            </Nav.Link>
            <Nav.Link
              href="#Projects"
              onClick={(e) => handleNavItemClick(e, "Projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#Work"
              onClick={(e) => handleNavItemClick(e, "Work")}
            >
              Work
            </Nav.Link>
            <Nav.Link
              href="#Contact"
              onClick={(e) => handleNavItemClick(e, "Contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavBar;
