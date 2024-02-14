import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const About = () => {
  const visitGithub = () => {
    window.location = "https://github.com/itz10pankaj";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="../../../images/Profile.png"
              alt="Founder"
            />
            <Typography>Pankja Garg</Typography>
            <Button onClick={visitGithub} color="primary">
              Visit MY GITHUB ACCOUNT
            </Button>
            <span>
              This is my major project on web development for showcasing my MERN skills
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">MY Handles</Typography>
            <a
              href="https://github.com/itz10pankaj"
              target="blank"
            >
              <GitHubIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://www.linkedin.com/in/pankaj9355/" target="blank">
              <LinkedInIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
