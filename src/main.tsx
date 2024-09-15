import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@telegram-apps/telegram-ui/dist/styles.css';
import './index.css';

import { Root } from './Root';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
