import { produce } from "immer";

const INITITAL_STATE = {
  customer: {},
  petshops: [],
  petshopMapSelected: null,
  mapCenter: {
    lat: -13.851,
    lng: -40.0812,
  },
};

function shop(state = INITITAL_STATE, action) {
  switch (action.type) {
    case "@shop/SET_CUSTOMER": {
      /// logica
      return produce(state, (draft) => {
        draft.customer = action.customer;
      });
    }
    case "@shop/SET_PETSHOPS": {
      /// logica
      return produce(state, (draft) => {
        draft.petshops = action.petshops;
      });
    }

    default:
      return state;
  }
}

export default shop;
