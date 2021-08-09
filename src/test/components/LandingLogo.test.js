import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import LandingLogo from "../../components/LandingLogo.js";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const textFoundInApp = (textVal) => {
  const wrapper = shallow(<LandingLogo />);
  const text = wrapper.text();
  expect(text).toEqual(textVal);
};

test("It renders the login landing logo", () => {
  const pageText = "Todo.Task lists anywhere and everywhere";
  textFoundInApp(pageText);
});
