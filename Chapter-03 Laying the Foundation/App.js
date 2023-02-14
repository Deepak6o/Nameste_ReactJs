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
 * Tree
 * 
 * 
 * 
 * 
 * Transitive Dependencies
*/

/* <div class="header">
<h1>Namaste React</h1>
<ul>
    <li>About us</li>
    <li>Support</li>
    <li>Home</li>
</ul>
</div> */


const container = React.createElement(
    "div",
    {
        id: "container",
    },
    [React.createElement(
        "h1",
        {
            id: "title",//probs
        }, 
        "Heading 1 for parcel"), React.createElement(
            "ul",
            {}, 
            [
                React.createElement(
                    "li",
                    {}, 
                    "About"
                    ),
                    React.createElement(
                        "li",
                        {}, 
                        "Support"
                        ),
                        React.createElement(
                            "li",
                            {}, 
                            "Home")
            ])]
)

/*React Component
-Functional Component
*/
const Title = ()=>{
    return(
        <h1>Title</h1>
    );
}
const HeaderComponent = ()=>{
    return (
        <div>
            {container}
           
            <Title/> 
            <h1>Namaste React H1 tag</h1>
            <h2>This is h2 tag</h2>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside root
root.render(<HeaderComponent/>);