import { put, select } from 'redux-saga/effects';
import { getPageConfig } from "../selectors";
 
export function* fetchPageConfigSaga(action) {
    yield console.log("saga triggered!");
    if (!action || !action.pageConfigName) {
        return;
    }

    const existingData = yield select(getPageConfig, action.pageConfigName);
    if (existingData) {
        return;
    }

    try {
        const json = yield fetch(`/configs/${action.pageConfigName}.json`)
            .then(response => response.json(), );        
        yield put({ 
            type: "FETCH_PAGE_CONFIG_COMPLETE", 
            pageConfigName: action.pageConfigName,
            json
        });
    } catch (e) {
        yield put({ 
            type: "FETCH_PAGE_CONFIG_ERROR", 
            pageConfigName: action.pageConfigName,
            error: e
        });
    }
};