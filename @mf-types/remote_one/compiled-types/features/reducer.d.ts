declare const reducer: import("@reduxjs/toolkit").Reducer<{
    counter: import("./counter.slice").CounterState;
}, import("@reduxjs/toolkit").UnknownAction, Partial<{
    counter: import("./counter.slice").CounterState | undefined;
}>>;
export default reducer;
