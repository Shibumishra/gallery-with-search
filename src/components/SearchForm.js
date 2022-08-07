import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

class SearchForm extends Component {

  handleSubmit = e => {
    e.preventDefault();
    let query = this.query.value;
    e.currentTarget.reset();
    this.props.props.history.push({
      pathname: `/search/${query}`
    })

  };

  render() {

    return (
      <div>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input type="search"
            name="search"
            placeholder="Search...."
            ref={(input) => this.query = input}
            required />
          <Button type="submit" className="search-button" variant="contained" color="secondary">
            <SearchIcon />
          </Button>
        </form>
      </div>
    );
  }
}
export default SearchForm;