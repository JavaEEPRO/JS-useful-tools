let mount = require('enzyme/mount'),
    Target = require('../Target').Target;

describe('', function () {
  it("In Target.js, make sure that you define a shouldComponentUpdate function before the render function.", function () {
    let wrapper = mount(<Target number={1} />);
    expect(typeof wrapper.instance().shouldComponentUpdate).to.equal('function');
  });
});

describe('', function () {
  it("If this.props.number is not equal to nextProps.number, then shouldComponentUpdate should return true.", function () { 
 
    let wrapper = mount(<Target number={1} />);
    
    expect(wrapper.props().number).to.equal(1);
    
    expect(wrapper.instance().shouldComponentUpdate({ number: 2 },{})).to.equal(true);
  });
});

describe('', function () {
  it("If this.props.number is equal to nextProps.number, then shouldComponentUpdate should return false.", function () {

    let wrapper = mount(<Target number={1} />);
    
    expect(wrapper.props().number).to.equal(1);
    
    expect(wrapper.instance().shouldComponentUpdate({ number: 1 },{})).to.equal(false);
  });
});
