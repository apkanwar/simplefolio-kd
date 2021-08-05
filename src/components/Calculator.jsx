import React, { useState, useEffect } from 'react';
import Calculator from './Calculator/Calculator';

import { PortfolioProvider } from '../context/context';

import { calcData } from '../mock/data';

function App() {
  const [calculator, setCalc] = useState({});

  useEffect(() => {
    setCalc({ ...calcData });
  }, []);

  return (
    <PortfolioProvider value={{ calculator }}>
      <Calculator />
    </PortfolioProvider>
  );
}

export default App;
