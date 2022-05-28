import './styles/index.scss';

import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import Routes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
      <RecoilRoot>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </RecoilRoot>
  </React.StrictMode>
);
