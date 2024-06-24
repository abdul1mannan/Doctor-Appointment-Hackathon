import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import './index.css';
import App from './App';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

const rootElement = document.getElementById('root');

// Use createRoot to render your root component
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ReactNotifications />
    <App />
  </React.StrictMode>
);
