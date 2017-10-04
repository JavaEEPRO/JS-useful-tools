let shallow = require('enzyme/shallow'),
    TopNumber = require('../TopNumber').TopNumber;

describe('', function () {
  it("In TopNumber.js, make sure that you define a componentWillReceiveProps function before the render function.", function () {
    let wrapper = shallow(<TopNumber />);
    expect(typeof wrapper.instance().componentWillReceiveProps).to.equal('function');
  });
});

describe('', function () {
  it("If nextProps.number is greater than this.state.highest, then set this.state.highest equal to nextProps.number.", function () {

    let wrapper = shallow(<TopNumber />);
    
    expect(wrapper.state().highest).to.equal(0);

	  wrapper.setProps({ number: 2 });

    expect(wrapper.state().highest).to.equal(2);
  });
});

describe('', function () {
  it("If nextProps.number is not greater than this.state.highest, then don't change this.state.highest.", function () {

    let wrapper = shallow(<TopNumber />);
    
    expect(wrapper.state().highest).to.equal(0);

	  wrapper.setProps({ number: 10 });

    expect(wrapper.state().highest).to.equal(10);
    
    wrapper.setProps({ number: 9 });
    
    expect(wrapper.state().highest).to.equal(10);
  });
});
