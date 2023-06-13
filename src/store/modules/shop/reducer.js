import { produce } from "immer";

const INITITAL_STATE = {
  customer: {},
  petshops: [],
  petshopMapSelected: null,
  mapCenter: {
    lat: -23.561684,
    lng: -46.625378,
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
    case "@shop/SET_SHOP_MAP_SELECT": {
      /// logica
      return produce(state, (draft) => {
        draft.petshopMapSelected = action.petshop;
      });
    }
    case "@shop/SET_MAP_CENTER": {
      /// logica
      return produce(state, (draft) => {
        draft.mapCenter = action.location;
      });
    }

    default:
      return state;
  }
}

export default shop;
