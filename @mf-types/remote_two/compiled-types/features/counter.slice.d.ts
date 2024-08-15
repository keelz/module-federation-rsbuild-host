import type { CaseReducer, CaseReducerWithPrepare, PayloadAction, Slice } from '@reduxjs/toolkit';
export interface CounterState {
    value: number;
}
declare type CounterReducer = Record<string, CaseReducer<CounterState, {
    payload?: any;
    type: string;
}> | CaseReducerWithPrepare<CounterState, PayloadAction<any, string, any, any>>>;
declare const counter: Slice<CounterState, CounterReducer>;
export declare const increment: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<`${string}/${string}`> | import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<any[], any, `${string}/${string}`, never, never> | import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<any[], any, `${string}/${string}`, never, any> | import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<any[], any, `${string}/${string}`, any, never> | import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<any[], any, `${string}/${string}`, any, any>, decrement: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<`${string}/${string}`> | import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<any[], any, `${string}/${string}`, never, never> | import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<any[], any, `${string}/${string}`, never, any> | import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<any[], any, `${string}/${string}`, any, never> | import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<any[], any, `${string}/${string}`, any, any>, incrementByAmount: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<`${string}/${string}`> | import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<any[], any, `${string}/${string}`, never, never> | import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<any[], any, `${string}/${string}`, never, any> | import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<any[], any, `${string}/${string}`, any, never> | import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<any[], any, `${string}/${string}`, any, any>;
export default counter;
