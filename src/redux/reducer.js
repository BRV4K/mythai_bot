import { createSlice } from '@reduxjs/toolkit'

export const Storage = createSlice({
    name: 'Storage',
    initialState: {
        storage: {
            'estateType': "",
            'district': "",
            'orderType': "",
        }
    },
    reducers: {
        setEstateType: (state, action) => {
            state.storage.estateType = action.payload;
        },
        clearEstateType: (state) => {
            state.storage.estateType = "";
        },
        setDistrict: (state, action) => {
            state.storage.district = action.payload;
        },
        clearDistrict: (state) => {
            state.storage.district = "";
        },
        setOrderType: (state, action) => {
            state.storage.orderType = action.payload;
        },
        clearOrderType: (state) => {
            state.storage.orderType = "";
        }
    },
})

export const {
    setEstateType,
    clearEstateType,
    setDistrict,
    clearDistrict,
    setOrderType,
    clearOrderType
} = Storage.actions;

export default Storage.reducer;