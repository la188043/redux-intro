import React from 'react';

import Counter from './components/Counter';
import Auth from './components/Auth';
import CounterConnect from './components/CounterConnect';

const App = () => {
  return (
    <div className="container">
      <Counter />
      <CounterConnect />
      <Auth />
    </div>
  );
};

export default App;
