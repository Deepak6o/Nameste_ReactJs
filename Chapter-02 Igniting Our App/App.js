import React from "react";
import ReactDOM from "react-dom";


/*** 
 * HMR - Hot Module Replacement
 * File Watcher algorithms - c++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev and Production Build
 * Super fast build algorithm
 * Image Optimization
 * Caching while developmnt
 * Compresses your file
 * Campatable with older version of browser
 * HTTPS on dev
 * Port Number
 * Consistent hashing Alogorithm
 * Zero config
 * 
 * 
 * 
 * 
 * Transitive Dependencies
*/

const heading = React.createElement(
    "h1",
    {
        id: "title",//probs
    }, "Heading 1 for parcel");
const heading2 = React.createElement(
    "h2",
    {
        id: "title",//probs
    }, "Heading 2 for parcel");
const container = React.createElement(
    "div",
    {
        id: "container",
    },
    [heading, heading2]
)
const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside root
root.render(container);