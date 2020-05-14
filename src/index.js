import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {Provider} from 'react-redux'; 
import {createStore, combineReducers, applyMiddleware} from 'redux'; 
import logger from 'redux-logger'; 
import {takeEvery, put} from 'redux-saga/effects'; 
import createSagaMiddleware from 'redux-saga'; 
import axios from 'axios'; 

//reducer one template, need to change state
const reducerOne = (state=0, action) => {
    return state; 
}

//watcher generator function template 
function* watcherSaga(action) {
    yield takeEvery('SET_SEARCH', searchGiphy)
}

//Saga one template 
function* searchGiphy (action) {
try {
    const response = yield axios.post('/api/search', ({search: action.payload})); 
    console.log('in sagaOne', response.data)
    //yield put ({type: })
}catch (err) {
    console.log('in sagaOne', err); 
    }
}

const sagaMiddleware = createSagaMiddleware(watcherSaga); 

const store = createStore (combineReducers ({reducerOne}), 
applyMiddleware(logger, sagaMiddleware)); 

sagaMiddleware.run(watcherSaga); 



ReactDOM.render(
<Provider store = {store}>
<App />
</Provider>
, document.getElementById('react-root'));
