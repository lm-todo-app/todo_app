import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Login from "../../containers/login/Login.js";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const isFoundInAppByID = (id) => {
  const wrapper = shallow(<Login />);
  const appComponent = wrapper.find({ id: id });
  expect(appComponent.length).toBe(1);
};

test("renders without error", () => {
  isFoundInAppByID("login");
});
