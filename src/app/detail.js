import React, {Component} from 'react';
import {Header} from './header';
import {Restaurants} from './restaurants/restaurants';
import {RestaurantDetail} from './restaurants/restaurantDetail';
import {Footer} from './footer';
import SearchInput, {createFilter} from 'react-search-input'
import axios from 'axios';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

export class Detail extends Component {
  constructor(props, context) {
    super(props, context);
    this.props = props;
    this.state = {restaurants: []};
  }

  componentDidMount() {
    axios
      .get('/app/restaurants/restaurants.json')
      .then(response => {
        this.setState({restaurants: response.data});
      });
  }

  render() {
    const restaurantDetail = this.state.restaurants.filter(createFilter(this.props.params.key, ['key']));

    return (
      <div style={styles.container}>
        <Header/>
        <main style={styles.main}>
          <div style={styles.restaurants}>
            {restaurantDetail.map((restaurant, i) => (
              <RestaurantDetail restaurant={restaurant}/>
            ))}
          </div>
        </main>
        <Footer/>
      </div>
    );
  }
}
