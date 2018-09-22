import React from "react";
import { Link } from "@reach/router";

class Bar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const barInfo = this.props.barInfo;
    return (
      <div>
        <h1>{barInfo.barName}</h1>
        <Link to="/bar/profile">View Profile</Link>
        <Link to="/bar/menu">Edit Menu</Link>
        <p>stats go here...</p>
      </div>
    );
  }

};

export default Bar;