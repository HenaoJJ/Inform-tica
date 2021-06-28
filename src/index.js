import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "firebase/firestore";
import { FirebaseAppProvider } from "reactfire";
import firebaseConfig from './firebaseConfig'
import Productos from './estados/Tabla';


ReactDOM.render(
  <React.StrictMode>
<FirebaseAppProvider firebaseConfig={firebaseConfig}>
<Productos/>
</FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (foar example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
