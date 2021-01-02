import { fetchPageConfigSaga } from "./dataConfigsSagas";
import { takeLatest, all } from 'redux-saga/effects';

function* actionWatcher() {
    yield takeLatest('FETCH_PAGE_CONFIG_START', fetchPageConfigSaga);
};

export function* rootSaga() {
    yield all([ actionWatcher() ]);
}