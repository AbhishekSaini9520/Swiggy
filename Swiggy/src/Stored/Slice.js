import { createSlice } from "@reduxjs/toolkit"


const cardSlicer = createSlice(
    {
        name: "Slice1",
        initialState: {
            item: [],
            count: 0
        },
        reducers: {
            addItem: (state, action) => {
                state.item.push({...action.payload, quantity : 1});
                state.count += 1;
            },
            incrementItem: (state, action) => { 
                const element = state.item.find(state => state.id === action.payload.id);
                element.quantity += 1;
                state.count += 1;
            },
            decrementItem: (state, action) => { 
                const element = state.item.find(state => state.id === action.payload.id);
                if(element.quantity > 1){
                    element.quantity -= 1;
                }
                else{
                    state.item = state.item.filter(state=> state.id != action.payload.id);
                }
                state.count -= 1;
            }
        }
    }
)

export const {addItem,incrementItem,decrementItem} = cardSlicer.actions;

export default cardSlicer.reducer;