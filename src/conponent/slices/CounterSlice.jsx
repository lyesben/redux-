import React from 'react';

const initialState = {
    value:0,
}

export const conterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment: state=> {
            state.value +1;
        },
        decrement: state=> {
            state.value -1;
        },
        
    },
});

export const {increment,decriment}= CounterSlice;
export default ConterSlice.reducer;