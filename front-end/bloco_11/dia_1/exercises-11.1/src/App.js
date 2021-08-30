import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const taskList = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

    class App extends React.Component {
      render() {
        return (
          <ul>{ taskList.map(task => Task(task)) }</ul>
        );
      }
    }

export default App;
