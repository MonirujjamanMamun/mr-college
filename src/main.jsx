import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import mainRoute from './router/mainRoute.jsx';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={mainRoute} />
    </Provider>
  </StrictMode>
);
