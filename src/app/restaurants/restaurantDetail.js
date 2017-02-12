import React, {Component} from 'react';
import {Link} from 'react-router'

const styles = {
  restaurant: {
    height: '15rem',
    width: '15rem',
    border: '1px solid lightgray',
    borderRadius: '1rem',
    margin: '1rem',
    padding: '1rem'
  },
  logo: {
    width: '5rem',
    height: '5rem',
    float: 'right',
    margin: '0 0 .5rem .5rem'
  },
  h3: {
    fontSize: '1.5rem',
    margin: '0 0 2rem 0',
    color: 'black'
  }
};

export class RestaurantDetail extends Component {
  constructor(props, context) {
    super(props, context);
    this.props = props;
  }

  render() {
    return (
      <div style={styles.restaurant}>
        <img style={styles.logo} src={this.props.restaurant.logo}/>
        <Link style={styles.h3} to={`/restaurant/${this.props.restaurant.key}`}>
          <h3 style={styles.h3}>
            {this.props.restaurant.title}
          </h3>
        </Link>
        <p>{this.props.restaurant.address}</p>
      </div>
    );
  }
}

RestaurantDetail.propTypes = {
  restaurant: React.PropTypes.object.isRequired
};
