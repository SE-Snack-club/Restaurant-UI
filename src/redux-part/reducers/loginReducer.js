import { createSlice } from '@reduxjs/toolkit'

export const LoginSclice = createSlice({
    name: "loginReducer",
    initialState: {
        isLogged: false,
        cartVal:0,
        userInfo:{  username:null,
                    userId:null, firstName:null,role:null },
        checkoutInfo:{
            userId:null,
            cartItems:[],
            totalBill:null,

        },
        offers:[]
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
        },
        setLoginUserInfo:(state,action)=>{
                state.userInfo.userId=action.payload.userId;
                state.userInfo.username=action.payload.username;
                state.userInfo.firstName=action.payload.firstName;
                state.userInfo.role= action.payload.role;
        },
        clearLoginUserInfo:(state)=>{
            state.userInfo.userId=null;
                state.userInfo.username=null;
                state.userInfo.firstName=null;
                state.userInfo.role=null;
        },
        setcheckoutInfo:(state,action)=>{
            state.checkoutInfo.cartItems=action.payload.cartItems;
            state.checkoutInfo.totalBill=action.payload.totalBill;
            state.checkoutInfo.userId= action.payload.userId;
        },
        setOffersInfo:(state,action)=>{
            state.offers=action.payload;
        }

    },

})

export const {login,logout,increaseCartCount,setLoginUserInfo,clearLoginUserInfo,setcheckoutInfo,setOffersInfo} = LoginSclice.actions;

export default LoginSclice.reducer;