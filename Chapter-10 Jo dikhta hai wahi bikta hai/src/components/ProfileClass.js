import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // count: 0,
      // count2: 0,
      userInfo: {
        //Initial value
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
    // console.log("Child - Constructor");
  }

  async componentDidMount() {
    //this is run in backend contineously (jabhi ek component se dusre component per jayenge ye continue chalta rahega we have to stop it using clearInterval in unmounted)
    this.timer = setInterval(() => {
      console.log("Nameste React");
    }, 1000);
    //API Calls
    // console.log("Child - componentDidMount");
    const data = await fetch("https://api.github.com/users/Deepak6o");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }
  componentWillUnmount() {
    clearInterval(this.timer)
    console.log("Component did wil unmount");
  }
  render() {
    const { count } = this.state;
    // console.log("Child - render");
    return (
      <div>
        <h1>profile class component</h1>
        <img alt="Image" src={this.state.userInfo.avatar_url} />
        <h2>Name : {this.state.userInfo.name}</h2>
        <h2>Location : {this.state.userInfo.location}</h2>
        {/* <h2>Count: {count}</h2>
        <button onClick={()=>{
            this.setState({
                count:1,
            })
        }}>SetCount</button> */}
      </div>
    );
  }
}

export default Profile;

/**
 * child constructor
 * child render
 *
 */
