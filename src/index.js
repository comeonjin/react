import React from 'react';
import ReactDOM from 'react-dom';
import {View as ScreenUI} from './screen';
import {Provider} from "react-redux";

import store from "./screen/store";

ReactDOM.render(
    <Provider store={store}>
        <ScreenUI />
    </Provider>,
    document.getElementById('root'));

