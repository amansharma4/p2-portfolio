import React from "react";
import "./Style.css";

export default function Project() {
  return (
    <div class="content">
      <h1 class="head">Projects</h1>
      <h1 class="head">Blog</h1>
      <div class="head1">
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
}
