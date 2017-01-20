import React, { Component, PropTypes } from 'react';
import styles from 'styles/app.scss';

class App extends Component {
  static propTypes = {
    number: PropTypes.number,
    onClick: PropTypes.func,
  };

  render() {
    const { onClick, number } = this.props;
    return (
      <div
        className={styles.wrapper}
        onClick={onClick}
      >
        {number}
      </div>
    );
  }
}

export default App;
