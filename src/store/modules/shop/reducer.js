import { produce } from "immer";

const INITITAL_STATE = {
  customer: {},
};

function shop(state = INITITAL_STATE, action) {
  switch (action.type) {
    case "SET_CUSTOMER": {
      /// logica
      return produce(state, (draft) => {
        draft.customer = action.customer;
      });
    }

    default:
      return state;
  }
}

export default shop;
