import { configureStore, combineReducers, createStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import remoteOneReducer from 'remote_one/reducer';
import remoteTwoReducer from 'remote_two/reducer';

export interface RootState extends
  RemoteOne.State,
  RemoteTwo.State {}

const reducer = combineReducers<RootState>({
  remote_one: remoteOneReducer,
  remote_two: remoteTwoReducer,
});

export const store = configureStore<RootState>({ reducer });
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
