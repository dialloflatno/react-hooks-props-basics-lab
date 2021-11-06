import React from "react";
import Links from "./Links";



function About({ userBio,userLinks}) {

//  const usersProLinks = userLinks.map(link =>
//    <Links 
//    github  = {link.github}
//    linkedin = {link.linkedin}
//    />);

  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{userBio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* <Links github = {userLinks.github} linkedin = {userLinks.linkedin}  /> */}
      <Links links = {userLinks} />

    </div>
  )

}

export default About;
