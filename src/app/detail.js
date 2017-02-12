import React, {Component} from 'react';
import {Header} from './header';
import {RestaurantDetail} from './restaurants/restaurantDetail';
import {Footer} from './footer';
import {createFilter} from 'react-search-input';
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
              <RestaurantDetail key={i} restaurant={restaurant}/>
            ))}
          </div>
        </main>
        <Footer/>
      </div>
    );
  }
}

Detail.propTypes = {
  params: React.PropTypes.object.isRequired
};
