import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import tokenSlice from "../Feature/counterSlice";
import userSlice from "../Feature/userInfoSlice";
import { persistStore, persistReducer } from "redux-persist";

const rootReducer = combineReducers({
  token: tokenSlice,
  user: userSlice,
});
const persistConfig = {
  key: "counter",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({ reducer: persistedReducer });
export const persistor = persistStore(store);

/*export const store = configureStore({
  reducer: {
    token: tokenSlice,
    user: userSlice,
  },
});
*/
