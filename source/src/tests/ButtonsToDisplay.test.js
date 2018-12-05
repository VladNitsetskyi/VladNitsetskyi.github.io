import React from "react";
import StopwatchButton from "../components/UI/StopwatchButton/StopwatchButton";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ButtonsToDisplay from "../components/helpers/ButtonsToDisplay";

configure({ adapter: new Adapter() });

describe("<ButtonsToDisplay />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ButtonsToDisplay />);
  });
  it("should render 3 buttons if time is not 0", () => {
    expect(wrapper.find(StopwatchButton)).toHaveLength(3);
  });
  it("should render 1 button if time is  0", () => {
    wrapper.setProps({ time: 0 });
    expect(wrapper.find(StopwatchButton)).toHaveLength(1);
  });
  it("should render Start button if time is  0", () => {
    wrapper.setProps({ time: 0 });
    expect(wrapper.contains(<StopwatchButton title="Start" />)).toEqual(true);
  });
});
