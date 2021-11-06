import React from "react";

function Home({userInfo}) {
  return (
    <div id="home">
      <h1 style={{ color: userInfo.color }}>
        {userInfo.name} is a Web Developer from {userInfo.city}
      </h1>
    </div>
  );
}

export default Home;
