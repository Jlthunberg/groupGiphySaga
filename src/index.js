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
const reducerOne = (state = [], action) => {
    if(action.type === 'Gliffy' ) {
        console.log( 'in reducerOne', action.payload);
        state = action.payload.data;
    }; 
    console.log('in reducerOne' , state); 
    return state; 
}

const reducerTwo = (state = [], action) => {
    if (action.type === 'FAVORITES_ON_DOM') {
        console.log('in reducerTwo', action.payload); 
        state = action.payload; 
    }
    console.log('in reducerTwo', state)
    return state; 
}



//watcher generator function template 
function* watcherSaga(action) {
    yield takeEvery('SET_SEARCH', searchGiphy); 
    yield takeEvery ('ADD_FAVORITE', addFavorite); 
    yield takeEvery('favorite', getFavorites)
} //end ADD_FAVORITE

function* getFavorites(action) {
    try {
        const response = yield axios.get('/api/favorite');
        console.log('in sagaOne', response.data);
        yield put({ type: 'FAVORITES_ON_DOM', payload: response.data}); //response back talk w/ put
    } catch (err) {
        console.log('in sagaOne', err);
    }
}

function* addFavorite (action) {
    try {
        const response = yield axios.post('/api/favorite', ({ favorite: action.payload }));
        console.log('in sagaOne', response);
        yield put({ type: 'favorite'}); //response back talk w/ put
    } catch (err) {
        console.log('in sagaOne', err);
    }
}



//Saga one template 
function* searchGiphy (action) {
try {
    const response = yield axios.post('/api/search', ({search: action.payload})); 
    console.log('in sagaOne', response.data)
    yield put ( {type: 'Gliffy', payload: response.data } );
}catch (err) {
    console.log('in sagaOne', err); 
    }
}

const sagaMiddleware = createSagaMiddleware(watcherSaga); 

const store = createStore (combineReducers ({reducerOne, reducerTwo}), 
applyMiddleware(logger, sagaMiddleware)); 

sagaMiddleware.run(watcherSaga); 



ReactDOM.render(
<Provider store = {store}>
<App />
</Provider>
, document.getElementById('react-root'));
