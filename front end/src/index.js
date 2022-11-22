//引入react核心库
import React from 'react';
//引入reactDom
import ReactDOM from 'react-dom';
//引入APP组件
import App from './App'
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react';

import { persistor } from './redux/store';


import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PersistGate>


</Provider>);

