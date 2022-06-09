import React from 'react';
import CreateRoot from 'react-dom/client';
import App from './components/App';



CreateRoot.createRoot(document.querySelector('#root')).render(
    <App />,
);