import { INCREMENT, DECREMENT } from './constant';

export const initialState = {
  counter: 10,
};

export default function homeContainerReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        state,
        counter: state.counter + 1,
      };
      case DECREMENT:
        return{
          state,
          counter: state.counter - 1,
        };
    default:
      return state;
  }
}