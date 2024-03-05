// src/App.tsx
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import Orders from './screens/orders';
import OrderSummary from './screens/orderSummary';
import '../src/assets/styles/styles.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Orders/>
      {/* <OrderSummary /> */}
    </ThemeProvider>
  );
}

export default App;
