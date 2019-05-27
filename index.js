const { createStore } = require("redux");
const ADD_ONE = "ADD_ONE";
const REMOVE_ONE = "REMOVE_ONE";

const myCoolReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case ADD_ONE:
      return { ...state, counter: state.counter + 1 };
    case REMOVE_ONE:
      return { counter: state.counter - 1 };
    default:
      return state;
  }

  return state;
};

let store = createStore(
  myCoolReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch({ type: "ADD_ONE" });
store.dispatch({ type: "ADD_ONE" });
store.dispatch({ type: "ADD_ONE" });
store.dispatch({ type: "ADD_ONE" });
