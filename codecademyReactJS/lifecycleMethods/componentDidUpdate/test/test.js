let mount = require('enzyme/mount'),
    appModule = require('../App'),
    components = appModule.__ReactComponents,
    App = components[0];
 
describe('', function () {
  it("In App.js, make sure that you define a componentDidUpdate function before the render function.", function () {
    let wrapper = mount(<App />);
    expect(typeof wrapper.instance().componentDidUpdate).to.equal('function');
  });
});
describe('', function () {
  it("In App's componentDidUpdate function, if this.state.latestClick is less than prevState.latestClick, then you should call this.endGame().", function () {
    let wrapper = mount(<App />);
                          
    wrapper.setState({ latestClick: 5 });
    
    expect(wrapper.state().latestClick).to.equal(5);
                          
    wrapper.instance().componentDidUpdate({}, { latestClick: 10 });
    
    expect(wrapper.state().latestClick).to.equal(0);
  });
});

describe('', function () {
  it("In App's componentDidUpdate function, if this.state.latestClick is not less than prevState.latestClick, then you should not call this.endGame().", function () {
    let wrapper = mount(<App />);
                          
    wrapper.setState({ latestClick: 5 });
    
    expect(wrapper.state().latestClick).to.equal(5);
                          
    wrapper.instance().componentDidUpdate({}, { latestClick: 4 });
    
    expect(wrapper.state().latestClick).to.equal(5);
  });
});
