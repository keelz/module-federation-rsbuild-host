declare const remoteTwoSlice: import("@reduxjs/toolkit").Slice<{
    counter: {
        value: number;
    };
}, {}, "remote_two_counter", "remote_two_counter", import("@reduxjs/toolkit").SliceSelectors<{
    counter: {
        value: number;
    };
}>>;
export default remoteTwoSlice;
