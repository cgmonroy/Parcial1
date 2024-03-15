import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FormularioAut from "./components/FormularioAut"
import Detalle from "./components/Detalle"
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FormularioAut />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
