import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducer/index"; // Import your combined reducer

// Check if Redux DevTools Extension is available
const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;
// Create the Redux store
export const store = createStore(
  reducers, // Pass the combined reducer
  composeEnhancers(applyMiddleware(thunk))
);

export default store


