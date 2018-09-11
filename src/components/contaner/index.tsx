import { h, render, Component } from 'preact';

export default class Conatner extends Component {
  render() {
    let { children } = this.props;
    return (
      <div>
        <div>header</div>
        <div>{children}</div>
        <div>fooer</div>
      </div>
    );
  }
}
