import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import { INCREMENT, DECREMENT } from "../const";

const initState = {
  count: 99,
};

export default function rootReducer(state = initState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload };
    case DECREMENT:
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
}
