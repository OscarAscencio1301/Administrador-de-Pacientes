const { combineReducers, createStore } = require("redux");
const { pacienteReducer } = require("../reducer/pacienteReducer");

const reducers = combineReducers({
    paciente: pacienteReducer
})


export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());