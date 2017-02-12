import React, {Component} from 'react';

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgb(223, 103, 42)'
  },
  title: {
    flex: 1,
    fontSize: '1.5rem',
    margin: '1rem'
  }
};

export class Header extends Component {
  render() {
    return (
      <header style={styles.header}>
        <p style={styles.title}>
          <a href="" target="_blank">
            Daily meal finder
          </a>
        </p>
      </header>
    );
  }
}
