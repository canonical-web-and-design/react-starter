import React from "react";
import { Button } from "vanilla-framework-react";

const HelloWorld = () => (
  <div>
    <h1>Hello Webteam!</h1>
    <Button brand value="Hello" />
    <p className="red">Happy hacking :)</p>
  </div>
);

HelloWorld.displayName = "HelloWorld";

export default HelloWorld;
