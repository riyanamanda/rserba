import showToast from '@/lib/toast';
import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
            showToast('success', 'Counter incremented');
        },
        decrement: (state) => {
            if (state.value <= 0) {
                state.value = 0;
                showToast('error', 'Counter cannot be negative');
            } else {
                state.value -= 1;
                showToast('success', 'Counter decremented');
            }
        },
        reset: (state) => {
            state.value = 0;
            showToast('info', 'Counter reset');
        },
    },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
