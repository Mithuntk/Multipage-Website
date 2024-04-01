// About.js
import React from 'react';
import Navbar from './Navbar';
import "./About.css"
function About() {
  return (
    <div className='about-background'>
        <Navbar />
      <h1>Front-End Developers Develop For...</h1>
      <p className='topic'>
      Front-end developers develop for the web platform, and the web platform is most commonly associated with web browser run times. Open a web browser like Google Chrome, navigate to a web page like google.com, and what you are looking at was developed by a front-end developer who developed the web page using HTML, CSS, and JavaScript.

The web platform runtime is not just for web browsers. It can also be used by WebViews and Progressive Web App (aka PWA) techniques to create native-like applications that are installed on an operating system. This means that a front-end developer can take their knowledge of web technologies and the web platform run time associated with browsers and web development and use these skills to create native applications for popular operating systems like Windows, Mac OS X, iOS, Android, and Linux.

Loosely, think of a WebView or PWA like a single tab from a web browser without an address bar or backward and forward buttons, that is embedded into a native application. This scenario is identical to the browser, and WebViews/PWA's run from HTML, CSS, and JavaScript but instead of facilitating internet access to web pages the intention is the web platform runtime is used to access the native operating systems APIs (i.e., A single browser view of a web page(s), using web technologies, that is run like a native application that may or may not be connected to the internet that has access to native operations either via native web APIs or bridges from web technologies to native APIs).
      </p>
      
    </div>
  );
}

export default About;
