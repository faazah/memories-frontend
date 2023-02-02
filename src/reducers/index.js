import { combineReducers } from "redux";
import {reducer} from './posts';

export const rootReducer = combineReducers({
    posts: reducer,
})