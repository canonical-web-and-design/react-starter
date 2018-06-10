import React from 'react';
import vanilla from 'vanilla-framework/scss/build.scss';
import main from '../styles/main.scss';

const HelloWorld = () => {
  return (
    <div>
      <h1>Hello Webteam!</h1>
      <p className="red">Happy hacking :)</p>
    </div>
  );
};

HelloWorld.displayName = 'HelloWorld';

export default HelloWorld;
