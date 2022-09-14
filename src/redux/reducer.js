import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";

// import reducer
import product from "./product";

const persistConfig = {
	key: "tokoku",
	storage: sessionStorage,
	whitelist: ["product"],
};

const rootReducer = combineReducers({ product });
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
