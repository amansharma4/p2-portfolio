import React from "react";
import "./Style.css";
import pic from "../img/pic.jpeg";

const Contact = () => {
  return (
    <div class="content">
      <img className="img" src={pic} alt="profilePhoto" />
      <h1>Aman Sharma</h1>
      <p className="para">
        I am Frontend Developer upskilling the skills to be an Full Stack Dev.
      </p>
      <h1 className="head">Skills</h1>

      <div className="box-container">
        <img
          className="imgc"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
          alt="js"
        />
        <img class="imgc" src="https://reactjs.org/logo-og.png" alt="react" />
        <img
          className="imgc"
          src="https://miro.medium.com/max/640/1*-ivYkzeuYJedPKdEdfnNlg.png"
          alt="mongodb"
        />
        <img
          className="imgc"
          src="https://miro.medium.com/max/2560/1*MuVcoMPyJcq8G4qf5s3HGQ.png"
          alt="nodejs"
        />
      </div>
      <br />
      <h1 className="head">Projects</h1>
      <h1 className="head">Blog</h1>
      <div className="head1">
        <ol>
          <li>
            <a href="https://www.linkedin.com/posts/amansharma01_day1-90dayschallenge-activity-6730060992027394048-oQ6I">
              My Experience of joining Full stack camp
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/posts/amansharma01_day-90dayschallenge-learning-activity-6730062421232291841-TeCD">
              Day 1 - Learnt about Flex box and Grid system. A summary!
            </a>
          </li>
          <li>
            <a href="https://amansharma4.github.io/p1-portfolio/">
              Day 2 - How I built my portfolio project in pure HTML/CSS in a
              day.
            </a>
          </li>
        </ol>
      </div>

      <hr />
      <p class="para">
        Follow my journey on
        <a href="https://twitter.com/amansharma0011" target="_">
          <span id="col"> Twitter</span>
        </a>
        <a href="https://www.linkedin.com/in/amansharma01/" target="_">
          <span id="col">LinkedIn</span>
        </a>
      </p>
    </div>
  );
};
export default Contact;
