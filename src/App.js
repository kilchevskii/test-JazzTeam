import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App/App';
import './index.css';
import { Provider } from 'react-redux';
import store from './App/redux/store';


ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
        <Router>
           <App />
        </Router>
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);