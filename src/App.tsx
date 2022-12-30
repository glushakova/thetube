import React, {FC} from 'react';
import {Provider} from 'react-redux'
import {createApplicationStore} from "./store";
import Map from './components/Map';

const store = createApplicationStore();

export const App: FC = () => {
    return <Provider store={store}><Map/></Provider>
}