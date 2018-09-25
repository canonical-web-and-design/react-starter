import React from "react";
import { Button } from "vanilla-framework-react";
import ubuntuLogo from "../images/ubuntu-circle-of-friends-large.svg";

const HelloWorld = () => (
  <div>
    <h1>
      <img
        src={ubuntuLogo}
        alt="Ubuntu circle of friends"
        width="32"
        height="32"
        className="ubuntu-logo"
      />
      Hello Webteam!
    </h1>
    <Button brand value="Hello" />
    <p className="red">Happy hacking :)</p>
  </div>
);

HelloWorld.displayName = "HelloWorld";

export default HelloWorld;
