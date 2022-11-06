import React from "react";
import {Provider} from "react-redux";
import {configureStore} from '@reduxjs/toolkit';
import HelloReduxExampleComponent from "./hello-redux-example-component";
import hello from "./reducers/hello";
import todos from "./reducers/todos-reducer";
import Todos from "./todos-component";

const store = configureStore(
    {
        reducer: {hello, todos}
    }
);

const ReduxExamples = () => {
    return (
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <br/>
                <Todos/>
                <br/>
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    );
};

export default ReduxExamples;