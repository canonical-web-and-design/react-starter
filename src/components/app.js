import React from "react";

import HelloWorld from "./hello_world";

const myComponent = () => (
  <div className="row">
    <div className="col-12">
      <HelloWorld />
    </div>
  </div>
);

export { myComponent as default };
