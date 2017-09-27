They will tell you, 'Look, here!' or 'Look, there!' Don't go away, nor follow after them (Luke 17:23)

class RenderedOne extends React.Component {
  render() {
    return <h1>I am being rendered by another</h1>;
  }
}

class OneWhoRendersAnotherOne extends React.Component {
  render() {
    return <RenderedOne />;
  }
}
