import React from "react";
import "./Style.css";
import Blogpost from "../components/Blogpost";
import Projectpost from '../components/Projectpost'
import {allPosts , allProject} from "../data/blogs";
import pic from "../img/pic.jpeg";

const Contact = () => {
  return (
    <div class="content">
      <img class="img" src={pic} alt="profilePhoto" />
      <h1>Aman Sharma</h1>
      <p class="para">
        I am Frontend Developer upskilling the skills to be an Full Stack Dev.
      </p>
      <h1 class="head">Skills</h1>

      <div class="box-container">
        <img
          class="imgc"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
          alt="js"
        />
        <img class="imgc" src="https://reactjs.org/logo-og.png" alt="react" />
        <img
          class="imgc"
          src="https://miro.medium.com/max/640/1*-ivYkzeuYJedPKdEdfnNlg.png"
          alt="mongodb"
        />
        <img
          class="imgc"
          src="https://miro.medium.com/max/2560/1*MuVcoMPyJcq8G4qf5s3HGQ.png"
          alt="nodejs"
        />
      </div>
      <br />
      <h1 class="head">Projects</h1>

      <h1>Blogs</h1>
      <div className="flex">
        {allPosts.map((post) => {
          return <Blogpost post={post} />;
        })}
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
