import React, {Component} from 'react';
import SearchInput, {createFilter} from 'react-search-input'

const styles = {
  title: {
    padding: '4rem',
    backgroundImage: 'url("http://cdn.havehalalwilltravel.com/wp-content/uploads/2016/06/The-mad-sailor-halal-food-cafe-fish-and-chips.jpg?x87844")',
    color: 'white',
    backgroundSize: 'cover'
  },
  input: {
    border: "none",
    padding: "20px",
    width: "100%",
    fontSize: '2rem',
    background: "rgba(255, 255, 255, .8)"
  }
};

export class Search extends Component {
  constructor(props, context) {
    super(props, context);

    this.props = props;
    console.log(props,'props');
  }
  render() {

    return (
      <div style={styles.title}>
        <SearchInput placeholder="Search nearby restaurants by name, location" style={styles.input} className="search-input" onChange={this.props.searchUpdated} />
      </div>
    );
  }
}
