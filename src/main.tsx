import React from 'react';
import { createRoot } from 'react-dom/client';

/**
 * This file can be ignored, please work in ./components/App.tsx
 */

// Include mock API.
import './mock';

// Include styles.
import './styles/index.css';

// Include application component.
import App from './components/App';

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
