import { configureStore, combineReducers } from '@reduxjs/toolkit';

const federatedSlices = {
  counter: await import("remote_one/counter-slice").then(
    (module) => module.default.reducer
  ),
};

const initStore = async () => {
  const store = configureStore({
    reducer: combineReducers({
      ...federatedSlices,
    }),
  });
  return store;
}

export default initStore;
