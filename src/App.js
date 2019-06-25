import React from 'react';
import './App.css';
import './assets/style.css';
import Header from "./components/Header";

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
      <div className="app">
        <Header />
      </div>
    );
  }
}

export default App;
