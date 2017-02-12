import React, {Component} from 'react';
import SearchInput from 'react-search-input';

const styles = {
  title: {
    padding: '5rem',
    backgroundImage: 'url("http://d3pah2c10lnl36.cloudfront.net/images/menu_detail_lunch_02_.jpg")',
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
  }
  render() {
    return (
      <div style={styles.title}>
        <SearchInput placeholder="Search nearby restaurants by name, location" style={styles.input} className="search-input" onChange={this.props.searchUpdated}/>
      </div>
    );
  }
}

Search.propTypes = {
  searchUpdated: React.PropTypes.func.isRequired
};
