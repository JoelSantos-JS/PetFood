export function setCustomer(customer) {
  return {
    type: "@shop/SET_CUSTOMER",
    customer,
  };
}
export function requestPetshops() {
  return {
    type: "@shop/REQUEST_PETSHOPS",
  };
}
export function setPetshops(petshops) {
  return {
    type: "@shop/SET_PETSHOPS",
    petshops,
  };
}
export function setShopMapSelect(petshop) {
  return {
    type: "@shop/SET_SHOP_MAP_SELECT",
    petshop,
  };
}
export function setMapCenter(location) {
  return {
    type: "@shop/SET_MAP_CENTER",
    location,
  };
}
export function requestPetshop(id) {
  return {
    type: "@shop/SET_PETSHOP",
    id,
  };
}
