import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import reducers from "./reducers";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

const reducer = persistReducer(
	{
		key: "root",
		storage: AsyncStorage
	},
	reducers
);
const store = configureStore({
	reducer,
	middleware: getDefaultMiddleware({
		serializableCheck: false
	})
});
const persistor = persistStore(store);

export default { store, persistor };
