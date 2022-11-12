//引入react核心库
import React from 'react';
//引入reactDom
import ReactDOM from 'react-dom';
//引入APP组件
import App from './App'
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </Provider>
  , document.getElementById('root')
)