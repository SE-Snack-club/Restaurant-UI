import { createSlice } from '@reduxjs/toolkit'

export const LoginSclice = createSlice({
    name: "loginReducer",
    initialState: {
        isLogged: false,
        cartVal:0
    },
    reducers: {
        login: (state) => {
            state.isLogged = true;
        },
        logout: (state) => {
            state.isLogged = false;
        },
        increaseCartCount:(state,action)=>{
            console.log("triggered");
            state.cartVal+=action.payload;
        }
    },

})

export const {login,logout,increaseCartCount} = LoginSclice.actions;

export default LoginSclice.reducer;