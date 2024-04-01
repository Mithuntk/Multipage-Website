import React from "react";
import "./Main.css"
import Navbar from './Navbar';
function Main() {
  return (
          <div className="home-background" > 
          <Navbar/> 
           
            <p>
            Fundamentally a front-end developer, historically sometimes referred to as a client-side developer, produces the code sent from a web server to a client/front-end to establish a user interface. For example, when you load a webpage into a web browser, code is sent from a web server to the device/client requesting the page. The code sent will produce the user interface one sees in the web browser. This code is considered front-end code and is a mixture of the web technologies HTML, CSS, and JavaScript.

An individual typically enters into the field of front-end development by first learning to build a simple website using HTML and CSS. HTML or HyperText Markup Language is likened to the structural framing of a house, while CSS or Cascading Style Sheets can be considered the finishing touches one sees once a home is complete.

Eventually, the house (i.e., a website) will need to become automated. In other words, it will need to become interactive and respond to events orchestrated by the user or the device on which it runs (e.g., on click or on load do X). To accomplish this, front-end developers learn the JavaScript programming language and use this language and the Document Object Model (aka the DOM) to add dynamic and interactive aspects to HTML and CSS.

As a front-end developer progresses in their career, they will move from a simple understanding of web pages and websites to potentially a robust grasp of software development practices as it is done on the web platform using the JavaScript programming language.
             </p>
          </div>
          )
                }

export default Main;