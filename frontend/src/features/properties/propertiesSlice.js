import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    keyword: "",
    propertyType: "",
    location: "",
    price: {
        min: 0,
        max: 0,
    },
    amenities: [],
    status: "",
    bathrooms: "",
    bedrooms: "",
    garages: "",
    yearBuilt: "",
    area: {
        min: "",
        max: "",
    },
    length: 0,
};

export const propertiesSlice = createSlice({
    name: "properties",
    initialState,
    reducers: {
        addKeyword: (state, action) => {
            state.keyword = action.payload;
        },
        addPropertyType: (state, action) => {
            state.propertyType = action.payload;
        },
        addLocation: (state, action) => {
            state.location = action.payload;
        },
        addPrice: (state, action) => {
            state.price.min = action.payload.min;
            state.price.max = action.payload.max;
        },
        addAmenities: (state, action) => {
            const isExist = state.amenities.some(
                (item) => item === action.payload
            );
            if (!isExist) {
                state.amenities.push(action.payload);
            } else {
                state.amenities = state.amenities.filter(
                    (item) => item !== action.payload
                );
            }
        },
        resetAmenities: (state, action) => {
            state.amenities = [];
        },
        addStatus: (state, action) => {
            state.status = action.payload;
        },
        addBathrooms: (state, action) => {
            state.bathrooms = action.payload;
        },
        addBedrooms: (state, action) => {
            state.bathrooms = action.payload;
        },
        addGarages: (state, action) => {
            state.garages = action.payload;
        },
        addYearBuilt: (state, action) => {
            state.yearBuilt = action.payload;
        },
        addAreaMin: (state, action) => {
            state.area.min = action.payload;
        },
        addAreaMax: (state, action) => {
            state.area.max = action.payload;
        },
        addLength: (state, action) => {
            state.length = action.payload;
        },
    },
});

export const {
    addKeyword,
    addPropertyType,
    addLocation,
    addPrice,
    addAmenities,
    addStatus,
    addBathrooms,
    addBedrooms,
    addGarages,
    addYearBuilt,
    addAreaMin,
    addAreaMax,
    addLength,
    resetAmenities,
} = propertiesSlice.actions;
export default propertiesSlice.reducer;
