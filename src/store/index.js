import { createStore } from 'redux';
import reducer from "../reducers/index";
import { contacts } from "../static-data";
const store = createStore(reducer);



export default store