import type { CaseReducer, CaseReducerWithPrepare, PayloadAction, Slice } from '@reduxjs/toolkit';
export interface CounterState {
    value: number;
}
export type CounterReducer = Record<string, CaseReducer<CounterState, {
    payload?: any;
    type: string;
}> | CaseReducerWithPrepare<CounterState, PayloadAction<any, string, any, any>>>;
export declare const counter: Slice<CounterState, CounterReducer>;
export type RemoteOneCounter = typeof counter;
export declare const increment: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<`${string}/${string}`> | import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<any[], any, `${string}/${string}`, never, never> | import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<any[], any, `${string}/${string}`, never, any> | import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<any[], any, `${string}/${string}`, any, never> | import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<any[], any, `${string}/${string}`, any, any>, decrement: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<`${string}/${string}`> | import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<any[], any, `${string}/${string}`, never, never> | import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<any[], any, `${string}/${string}`, never, any> | import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<any[], any, `${string}/${string}`, any, never> | import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<any[], any, `${string}/${string}`, any, any>, incrementByAmount: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<`${string}/${string}`> | import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<any[], any, `${string}/${string}`, never, never> | import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<any[], any, `${string}/${string}`, never, any> | import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<any[], any, `${string}/${string}`, any, never> | import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<any[], any, `${string}/${string}`, any, any>;
declare const _default: import("@reduxjs/toolkit").Reducer<CounterState>;
export default _default;
