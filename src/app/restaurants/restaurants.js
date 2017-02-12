import React, {Component} from 'react';
import axios from 'axios';
import {createFilter} from 'react-search-input';
import {Search} from '../search';
import {Restaurant} from './restaurant';
const KEYS_TO_FILTERS = ['key', 'title', 'location', 'address'];

const styles = {
  container: {
    margin: '0'
  },
  h2: {
    fontWeight: 300,
    fontSize: '1.5rem'
  },
  restaurants: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
};

export class Restaurants extends Component {
  constructor() {
    super();
    this.state = {restaurants: [], searchTerm: ''};
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  componentDidMount() {
    axios
      .get('app/restaurants/restaurants.json')
      .then(response => {
        this.setState({restaurants: response.data});
      });
  }

  searchUpdated(term) {
    this.setState({searchTerm: term});
  }

  render() {
    const filteredRestaurants = this.state.restaurants.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));

    return (
      <div style={styles.container}>
        <Search searchUpdated={this.searchUpdated}/>
        <div style={styles.restaurants}>
          {filteredRestaurants.map((restaurant, i) => (
            <Restaurant key={i} restaurant={restaurant}/>
          ))}
        </div>
      </div>
    );
  }
}
