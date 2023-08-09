import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import apiSlice from './apiSlice';
import wsSlice from './wsSlice';
import mainMenu from './Reducers/mainMenu';

const store = configureStore({
    reducer: {
        apiSlice: apiSlice.reducer,
        wsSlice: wsSlice.reducer,
        mainMenu: mainMenu.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(apiSlice.middleware)
            .concat(wsSlice.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const actions = {
    mainMenu: mainMenu.actions
};

export default store;
