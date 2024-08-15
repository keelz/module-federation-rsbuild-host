import { CounterState } from './features/counter.slice';
export interface RemoteTwoState {
    remote_two: {
        counter: CounterState;
    };
}
