import { h, render, Component } from 'preact';
import './style/index.less';
import Contaner from './components/contaner';
import Award from './components/award';
import Question from './components/question';

class Clock extends Component {
  state: any;
  constructor() {
    super();
    // 设置初始的时间
    this.state = {
      curr: 'award'
    };
  }
  render() {
    let time = new Date().toLocaleTimeString();
    let { curr } = this.state;
    return <Contaner>{curr == 'award' ? <Award /> : <Question />}</Contaner>;
  }
}

render(<Clock />, document.body);
