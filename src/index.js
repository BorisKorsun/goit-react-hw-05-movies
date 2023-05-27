import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { GlobalStyles } from 'styles/globalStyles';
import { Global } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global styles={GlobalStyles}/>
    <BrowserRouter basename="/goit-react-hw-05-movies/">
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
