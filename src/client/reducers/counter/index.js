import { INCREMENT_COUNTER } from '</enums/counter-action-types';

const defaultState = {
  number: 0,
};

const counterReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        number: state.number + 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
