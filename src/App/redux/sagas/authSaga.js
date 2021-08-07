import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
const apiUrl = "/users";
const postLogin = async (data) => {
  return await axios.get(apiUrl, data);
};

function* fetchLogin(action) {
  try {
    const userInfo = yield call(() => postLogin(action.payload.data));
    if (
      action.payload.data.login === userInfo.data[0].login &&
      action.payload.data.password === userInfo.data[0].password
    ) {
      localStorage.setItem("auth", (userInfo.data.authorized = true));
      yield put({ type: "GET_LOGIN_SUCCESS", payload: userInfo });
      action.payload.history.push('/profile');
    } else {
      localStorage.setItem("auth", (userInfo.data.authorized = false));
      yield put({ type: "GET_LOGIN_FAILED", payload: userInfo });
      // action.payload.history.push("/login");
    }
  } catch (error) {}
}

function* authLoginSaga() {
  yield takeEvery("GET_LOGIN_REQUESTED", fetchLogin);
}

export { authLoginSaga };
