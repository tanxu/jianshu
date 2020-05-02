import React from 'react'
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./index.js'),
  // loading: Loading, // loading动画
  loading() {
    return <div>正在加载</div>
  }
});

export default () => <LoadableComponent />

// export default class App extends React.Component {
//   render() {
//     return <LoadableComponent />;
//   }
// }