import { connect } from 'react-redux';
import { incrementCounter } from '</actions/counter';
import App from '</components/app';

const mapStateToProps = state => {
  return {
    number: state.counter.number,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => dispatch(incrementCounter()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
