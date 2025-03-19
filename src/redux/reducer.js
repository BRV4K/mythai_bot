import { createSlice } from '@reduxjs/toolkit'

export const Storage = createSlice({
    name: 'Storage',
    initialState: {
        storage: {
            'estateType': "",
            'district': "",
            'orderType': "",
            'transportType': ""
        }
    },
    reducers: {
        setEstateType: (state, action) => {
            state.storage.estateType = action.payload;
        },
        setDistrict: (state, action) => {
            state.storage.district = action.payload;
        },
        setOrderType: (state, action) => {
            state.storage.orderType = action.payload;
        },
        setTransportType: (state, action) => {
            state.storage.transportType = action.payload;
        }
    },
})

export const {
    setEstateType,
    setDistrict,
    setOrderType,
    setTransportType
} = Storage.actions;

export default Storage.reducer;