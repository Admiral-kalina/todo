const initialStore = {
  cash: 0,
};
export const INCREMENT_COUNT = "INCREMENT_COUNT";
export const DECREMENT_COUNT = "DECREMENT_COUNT";

export const cashReducer = (store = initialStore, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return { ...store, cash: store.cash + action.payload };
    case DECREMENT_COUNT:
      return { ...store, cash: store.cash - action.payload };
    default:
      return store;
  }
};

export const incrementCountAction = payload => ({type:INCREMENT_COUNT, payload})
export const decrementCountAction = payload => ({type:DECREMENT_COUNT, payload})