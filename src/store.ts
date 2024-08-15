import { configureStore, combineReducers } from '@reduxjs/toolkit';

const federatedSlices = {
  remote_one: await import("remote_one/reducer").then(
    (module) => module.default
  ),
  remote_two: await import("remote_two/reducer").then(
    (module) => module.default
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
