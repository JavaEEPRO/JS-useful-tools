let mount = require('enzyme/shallow'),
    Enthused = require('../Enthused').Enthused;

describe('', function () {
  it("In Enthused.js, make sure that you define a componentWillUnmount function before the render function.", function () {
    let wrapper = mount(<Enthused />);
    expect(typeof wrapper.instance().componentWillUnmount).to.equal('function');
  });
}); 

describe('', function () {
  it("In Enthused.js, componentWillUnmount should call clearInterval(this.interval).", function () {
    let f = function f () { return 'yo'; },
      wrapper = mount(<Enthused addText={f} />);

    expect(wrapper.instance().interval).to.not.exist;
    
    wrapper.instance().componentDidMount();
    
    let clone = function clone (obj) {
      let newObj = {};
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop) 
          && typeof obj[prop] != 'object') {
          newObj[prop] = obj[prop];
        }
      }
      return newObj;
    }; 
    
    let oldInterval = clone(wrapper.instance().interval);

    expect(clone(wrapper.instance().interval)).to.eql(oldInterval);
    
    wrapper.instance().componentWillUnmount();
    
    expect(clone(wrapper.instance().interval)).to.not.eql(oldInterval);
  });
});
