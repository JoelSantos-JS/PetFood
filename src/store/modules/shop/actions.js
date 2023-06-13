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
