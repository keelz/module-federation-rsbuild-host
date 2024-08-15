declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    remote_one: {
        counter: import("./features/counter.slice").CounterState;
    };
}, import("@reduxjs/toolkit").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("@reduxjs/toolkit").StoreEnhancer<{
    dispatch: import("@reduxjs/toolkit").ThunkDispatch<{
        remote_one: {
            counter: import("./features/counter.slice").CounterState;
        };
    }, undefined, import("@reduxjs/toolkit").UnknownAction>;
}>, import("@reduxjs/toolkit").StoreEnhancer]>>;
export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export declare const useAppDispatch: () => import("@reduxjs/toolkit").ThunkDispatch<{
    remote_one: {
        counter: import("./features/counter.slice").CounterState;
    };
}, undefined, import("@reduxjs/toolkit").UnknownAction> & import("@reduxjs/toolkit").Dispatch<import("@reduxjs/toolkit").UnknownAction>;
