import React from "react";
import { shallow } from "enzyme";
import HelloWorld from "../../components/HelloWorld";

describe("<HelloWorld />", () => {
  it("renders hello webteam", () => {
    const helloWorld = shallow(<HelloWorld />);
    expect(helloWorld.find("div h1").text()).toEqual("Hello Webteam!");
  });
});
