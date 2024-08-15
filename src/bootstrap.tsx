import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import initStore from './store';
import App from './App';

const root = createRoot(
  document.getElementById('root') as HTMLElement
);

initStore().then((store) => {
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
