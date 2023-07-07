import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    displayMenu : false,
}

const menuSlice = createSlice({
    name : 'mobile-menu',
    initialState,
    reducers:{
        toggleMenu: (state) =>{
            state.displayMenu = !state.displayMenu
        }
    }
})
// yasin was here :))
export default menuSlice.reducer;
export const {toggleMenu} = menuSlice.actions