import React from "react";

class SearchBar extends React.Component {

  state = {term: ''};

  render() {
    return (
        <div className="ui segment">
          <form className="ui form" onSubmit={this.onFormSubmit}>
            <div className="field">
              <label>Image Search</label>
            </div>
            <input type="text" value={this.state.term}
                   onChange={(e) => this.setState(
                       {term: e.target.value})}
            />
          </form>
        </div>
    )
  }

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
    // console.log(this.state.term)
  }
}

export default SearchBar;