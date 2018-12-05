import React from "react";
import StopwatchButton from "../components/UI/StopwatchButton/StopwatchButton";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Stopwatch } from "../containers/Stopwatch/Stopwatch";

configure({ adapter: new Adapter() });

describe("<Stopwatch />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Stopwatch />);
  });

  it("should change state when Start button is clicked s", () => {
    const button = shallow(<StopwatchButton title="Start" />);
    wrapper.setState({ time: 0 });
    expect(wrapper.state().time).toEqual(0);
    button.simulate("click");
    expect(wrapper.state().time).not.toBe("0");
  });
  it('should clear laps array if "clear laps" is clicked', () => {
    const button = shallow(<StopwatchButton title="Clear Laps" />);
    wrapper.setState({ laps: [1, 2, 3] });
    expect(wrapper.state().laps).toEqual([1, 2, 3]);
    button.simulate("click");
    expect(wrapper.state().laps).not.toBe([1, 2, 3]);
  });
});
