import { all, call, put, takeLatest } from "redux-saga/effects";
import api from "../../../services/api";
import { setPetshops } from "./actions";

export function* requestPetshops() {
  const response = yield call(api.get, "/petshop");
  const res = response.data;

  yield put(setPetshops(res.content));
}
export function* requestPetshop() {
  const response = yield call(api.get, "/petshop");
  const res = response.data;

  yield put(setPetshops(res.content));
}

export default all([
  takeLatest("@shop/REQUEST_PETSHOPS", requestPetshops),
  takeLatest("@shop/REQUEST_PETSHOPS", requestPetshops),
]);
