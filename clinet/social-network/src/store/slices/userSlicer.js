import { createSlice } from "@reduxjs/toolkit"; 
const userSlice = createSlice({
    name: "user", 
    initialState: {
        userName: ""  
    },
    reducers: {
        setUser: (state, action) => {
            state.userName = action.payload.userName;
        },
    }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;