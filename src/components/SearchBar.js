import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment" style={{ marginTop: "5rem" }}>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <input
              type="text"
              onChange={(e) => this.setState({ term: e.target.value })}
              value={this.state.term}
              placeholder='Start typing something like "cars" or "lakes"'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
