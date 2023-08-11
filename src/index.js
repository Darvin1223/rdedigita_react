import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './routes/App';
import reportWebVitals from './reportWebVitals';

// Función para manejar el cambio de tema
function handleThemeChange(event) {
    if (event.matches) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    }
}

// Agrega un listener para detectar cambios en el tema
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
darkModeMediaQuery.addListener(handleThemeChange);
handleThemeChange(darkModeMediaQuery); // Llama a la función para aplicar el tema inicial

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

