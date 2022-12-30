import {configureStore, createStore, createSlice} from '@reduxjs/toolkit';
import {mapSlice} from "./map";


export const createApplicationStore = () => {
    return configureStore({
        reducer: {
            map: mapSlice.reducer,
        }
    });
};

export type AppDispatch = ReturnType<typeof createApplicationStore>['dispatch'];
export type RootState = ReturnType<ReturnType<typeof createApplicationStore>['getState']>;
