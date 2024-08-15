import { CounterState } from './features/counter.slice';
export interface RemoteOneState {
    remote_one: {
        counter: CounterState;
    };
}
