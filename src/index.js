import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Loader from './components/Loader';
import './assets/css/main.css';
import './assets/css/core.css';

const Root = React.lazy(() => import('./root'))
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <BrowserRouter>
        <React.Suspense fallback={<React.Fragment><Loader/></React.Fragment>}>
          <Root/>
        </React.Suspense>
      </BrowserRouter>
  </React.StrictMode>
);