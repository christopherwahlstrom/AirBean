// Denna const är en reducer som hanterar alla reducers i applikationen för enkelhetens skull.
// Använder sig av combineReducers för att kombinera alla reducers.

import priceReducer from "./price";
import counterReducer from "./counter";
import itemReducer from "./item"; 

import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    item: itemReducer,
    price: priceReducer
});

export default allReducers;