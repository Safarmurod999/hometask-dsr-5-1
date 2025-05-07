import { createStore } from "./createStore";

// // reducer.js
// export function counterReducer(state, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// }

// const store = createStore(counterReducer, 0);

// export default store;

// Reducer function
function counterReducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

function increment() {
  store.dispatch({ type: "INCREMENT" });
}

function decrement() {
  store.dispatch({ type: "DECREMENT" });
}

const store = createStore(counterReducer, 0);

export { store, increment, decrement };
