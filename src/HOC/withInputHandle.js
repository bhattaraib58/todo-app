import React from 'react';


export const withInputHandle = WrapperComponent => {
  class WithInputHandle extends React.Component {

    constructor(props) {
      super(props);
      this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
      this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    handleSearchSubmit(event) {
      event.preventDefault();
    }

    handleSearchChange(e) {
      let value = e.target.value;
      this.props.searchInput(value);
    }

    render() {
      return <WrapperComponent
        handleSearchSubmit={this.handleSearchSubmit}
        handleSearchChange={this.handleSearchChange}
        {...this.props} />
    }
  }
  return WithInputHandle;
};
