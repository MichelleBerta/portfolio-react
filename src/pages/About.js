import React from "react";
import img1 from "../assets/headshot-copy.jpg"
function About() {
  return (
    <div className="container mt-8 id" id="about">
      <div className="col-s-12 col col-lg-12 col-xl-12 pl-5">
        <img className="headshot img-fluid mt-5 float-end" alt="me" src={img1}></img>
      </div>
      <div className="col-s-12 col-lg-12 col-xl-12 pl-5 mt100 about-me">
        <h3 className="flow-text">Hi! I'm Michelle.</h3>
        <p className="flow-text mb-5 mt-3 my-section">
          After becoming an empty nester, I decided to take on a whole new role in life. I spent twenty one years working part time as an office manager while my three children were in school. Now I am a Full Stack Developer, with special focus on Front End Development.  I have gained knowledge in React.js, JavaScript, Bootstrap, CSS, and much more.

          <br />
          <br />
          I am highly organized, loyal and a resourceful problem solver, with a passion for creativity.  I am committed to helping your company develop a website that is not only eye catching but interactive to keep your customers engaged.  I am known for having exceptional interpersonal communication abilities and thrive in a collaborative team environment.  Using my administration and organization skills I have helped previous employers and volunteer opportunities to streamline processes, saving time, money and efforts. 
          <br />
          <br />
          I am grateful for the opportunity I had to learn new technology and face new challenges as a student. Adding my new coding knowledge to the skills I learned previously, will make me a valuable employee to any company. I will bring lots of energy and dedication to any team.
          <br />
          <br />
          On a personal note, entertaining and being creative are my favorite pass times. An example of this passion is the Live Clue game I created using my entire home for the game board. In
          addition, I love pugs, swing dancing, escape rooms, Italy, meeting new people and solving a good mystery.
        </p>
      </div>
    </div>
  );
}

export default About;
