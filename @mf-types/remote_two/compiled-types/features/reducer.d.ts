declare const reducer: import("@reduxjs/toolkit").Reducer<{
    counter: import("./counter").CounterState;
}, import("@reduxjs/toolkit").UnknownAction, Partial<{
    counter: import("./counter").CounterState | undefined;
}>>;
export default reducer;
