import React from 'react'; // main library
import ReactDOM from 'react-dom'; // render the browser
import './index.css';
import App from './App'; //the  app js file
import reportWebVitals from './reportWebVitals';

ReactDOM.render( // render react file to the root
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
