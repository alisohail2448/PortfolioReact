import React, { useContext } from "react";
import "./Services.css";
import heartemoji from "../../img/heartemoji.png";
import glasses from "../../img/glasses.png";
import humble from "../../img/humble.png";
import Card from "../Card/Card";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
  const transition = { duration: 1, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id="Services">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis{" "}
          <br /> libero suscipit tenetur consectetur architecto! !
        </span>
        <button className="button s-button">Download CV</button>
        <div className="blur s-blur1" style={{ background: "#c1f5ff" }}></div>
      </div>
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={heartemoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Xd"}
          />
        </motion.div>
        <motion.div
          initial={{ right: "25rem" }}
          whileInView={{ top: "12rem", left: "-4rem" }}
          transition={transition}
          style={{ top: "12rem", left: "-4rem" }}
        >
          <Card
            emoji={glasses}
            heading={"Developer"}
            detail={"Html, Css, Javascript, React"}
          />
        </motion.div>
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ top: "19rem", left: "12rem" }}
          transition={transition}
          style={{ top: "19rem", left: "12rem" }}
        >
          <Card
            emoji={humble}
            heading={"UI/UX"}
            detail={"Lorem ipsum dummy text are usuallay section whrer"}
          />
          <div
            className="blur s-blur2"
            style={{ background: "var(--purple)" }}
          ></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
