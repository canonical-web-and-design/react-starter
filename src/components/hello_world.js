import React from 'react';
import { Button } from 'vanilla-framework-react';
import main from '../styles/main.scss';

const HelloWorld = () => {
  return (
    <div>
      <h1>Hello Webteam!</h1>
      <Button brand value="Hello" />
      <p className="red">Happy hacking :)</p>
    </div>
  );
};

HelloWorld.displayName = 'HelloWorld';

export default HelloWorld;
