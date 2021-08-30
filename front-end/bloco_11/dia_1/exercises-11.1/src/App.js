import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <ul>{Task('Primeiro item')}</ul>
    );
}

export default App;
