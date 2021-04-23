import { createStore } from 'redux';

// eslint-disable-next-line no-unused-vars
const reducer = (state = {}, action) => state;

// createStore(reducer, preloadedStore, enhancer);
const store = createStore(reducer);

export default store;

// 2. import { createStore } from 'redux';
// - const reduser - ф-ция, что принимает предыдущее состояние и действие, возвращает новое состояние
// - const store
// - export default store; -> index.js
// preloadedStore - начальное состояние, можно из localStorage взять инфу и закинуть в него [дополнительный параметр]
// enhancer - улучшайзер, обработчик действий до попадания в reducer [дополнительный параметр]
