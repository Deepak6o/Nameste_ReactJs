import { Component } from "react";
import { Outlet } from "react-router-dom";
import ProfileFuctionalComponent from "./Profile";
import Profile from "./ProfileClass";

// const About = () => {
//   return (
//     <div>
//       <h1>About Us Page</h1>
//       <p>This is the Namste React Live Course Chapter-07 Finding the path</p>
//       {/* <Outlet/> */}
//       <ProfileFuctionalComponent name={"Deepak Function"} />
//       <Profile name={"Deepak Class"} />
//     </div>
//   );
// };

class About extends Component {
    constructor(props){
        super(props);
        console.log("Parent Constructor")
    }
    componentDidMount(){
        console.log("Parent - componenentdidmount")
    }
  render() {
    console.log("Parent render")
    return (
      <div>
        <h1>About Us Page</h1>
        <p>This is the Namste React Live Course Chapter-07 Finding the path</p>
        {/* <Outlet/> */}
        <ProfileFuctionalComponent name={"Deepak Function"} />
        <Profile name={"Deepak Class"} />
      </div>
    );
  }
}
export default About;

/**
 * Parent Constructor
 * Parent Render
 *   First Child - Constructor
 *   First Child - Render
 *   Second Child - Constructor
 *   Second Child -Render
 *   First Child - ComponentDidMount
 *   Second Child - ComponentDidMount
 * Parent - ComponentDidMount
 */
