import { all } from 'redux-saga/effects';
import { authLoginSaga } from './authSaga';

export default function* rootSaga() {

   yield all([
      authLoginSaga(),
   ]);

}