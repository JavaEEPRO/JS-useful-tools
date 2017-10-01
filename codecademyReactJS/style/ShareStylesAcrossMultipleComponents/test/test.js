//But when he heard these things, he became very sad, for he was very rich.(Luke 18:23)

let shallow = require('enzyme/shallow'),
    rewire = require('rewire'),
    appModule = rewire('../AttentionGrabber'),
    components = appModule.__ReactComponents,
    TestedComponent = components[0];

describe('', function () {
  it('In AttentionGrabber.js, make sure that <h1> has an attribute ' 
     + 'of style={h1Style}', function () {
    let wrapper = shallow(<TestedComponent />),
      h1Style=appModule.__get__('h1Style');
    expect(wrapper.props().style).to.eql(h1Style);
  });
});
