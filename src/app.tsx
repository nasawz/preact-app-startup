import { h, render, Component } from 'preact';
import { rehydrate } from 'rfx-core';
import { inject, observer, Provider } from 'mobx-preact';
import './stores';
const store = rehydrate();

import './style/index.less';
import Contaner from './components/contaner';
import Award from './components/award';
import Question from './components/question';

@inject('store')
@observer
class Root extends Component<any, any> {
  state: any;
  constructor() {
    super();
  }

  change2Question() {
    let { common } = this.props.store;
    let { changeCurr } = common;
    changeCurr('question');
  }

  change2Award() {
    let { common } = this.props.store;
    let { changeCurr } = common;
    changeCurr('award');
  }

  render() {
    let { common } = this.props.store;
    let { curr } = common;
    return (
      <div>
        <Contaner>{curr == 'award' ? <Award /> : <Question />}</Contaner>
        <a href="javascript:;" onClick={this.change2Award.bind(this)}>
          award
        </a>{' '}
        <a href="javascript:;" onClick={this.change2Question.bind(this)}>
          question
        </a>
      </div>
    );
  }
}

render(
  <div>
    <Provider store={store}>
      <Root />
    </Provider>
  </div>,
  document.body
);
