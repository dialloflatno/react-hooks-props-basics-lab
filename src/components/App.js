import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
// console.log(user);

function App() {
  return (
    <div>
    <NavBar />
    <Home userInfo = {user} />
    <About userBio = {user.bio} userLinks = {user.links} />
    </div>
  );
}

export default App;



// ### App

// In the `App` component, 
//pass down data from the `user` object 
// as props 
// to the
// `Home` 

// starter code in the `Home` component
//  gives you a clue as to what props this component (takes in).

// `App` should also pass down a 
// prop of
//  `bio` => `About` component.

// Finally, 
// `App` should **also** pass down
//  the `github` and `linkedin` links 
// to
// the `About` component,
//  `About` can pass those 
// props down to the `Links`
// component you will create.