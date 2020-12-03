import React from "react";
import "./Style.css";
import Blogpost from "../components/Blogpost";
import { allPosts } from "../profileData";
import { allProject } from "../profileData";
import pic from "../img/pic.jpeg";

const Contact = () => {
  return (
    <div className="content">
      <img className="img" src={pic} alt="profilePhoto" />
      <h1>Aman Sharma</h1>
      <p className="para">
        I am Frontend Developer upskilling the skills to be an Full Stack Dev.
      </p>
      <h1 className="head">Skills</h1>

      <div className="box-container">
        <img
          class="imgc"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
          alt="js"
        />
        <img
          className="imgc"
          src="https://reactjs.org/logo-og.png"
          alt="react"
        />
        <img
          class="imgc"
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
      <div className="flex" key={1}>
        {allProject.map((post) => {
          return <Blogpost post={post} />;
        })}
      </div>
      <h1>Blogs</h1>
      <div className="flex">
        {allPosts.map((post) => {
          return <Blogpost post={post} />;
        })}
      </div>

      <hr />
      <p className="para">
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
