import { INCREMENT_COUNTER } from '</enums/counter-action-types';

export const incrementCounter = () => {
  return {
    type: INCREMENT_COUNTER,
  };
};

export default {
  incrementCounter,
};
