import React from 'react';
import './header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchSubmit(event) {
    event.preventDefault();
  }

  handleSearchChange(e) {
    const value = e.target.value;

    this.props.searchInput(value);
  }

  render() {
    return (
      <header className=" header">
        <div className="page-content">
          <h1>TODO APP</h1>

          <form onSubmit={this.handleSearchSubmit} className="search-form clearfix">
            <input type="text" placeholder="Search" onChange={this.handleSearchChange} className="search-box" />
          </form>
        </div>
      </header>
    );
  }
}

export default Header;
