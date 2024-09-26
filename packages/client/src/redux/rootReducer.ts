import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage';

// slices
import sampleReducer from "./slices/sample";

// ----------------------------------------------------------------------

export const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

const rootReducer = combineReducers({
  sample: sampleReducer,
});

export default rootReducer;
