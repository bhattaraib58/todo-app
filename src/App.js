import React from 'react';
import './App.css';
import Header from './components/header/header';
import { TodoApp } from './components/todoApp/todoApp';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputSearchData: ''
    };
    this.todoAppRef = React.createRef();
    this.searchInput = this.searchInput.bind(this);
  }

  searchInput(inputSearchData) {
    this.setState(
      {
        inputSearchData: inputSearchData
      },
      this.todoAppRef.current.searchInputData
    );
  }

  render() {
    return (
      <div className="container">
        <Header searchInput={this.searchInput} />
        <TodoApp inputSearchData={this.state.inputSearchData} ref={this.todoAppRef} />
      </div>
    );
  }
}
export default App;
