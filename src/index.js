import React from "react";
import ReactDOM from "react-dom";
import App from './17-redux-songs/components/App'
import {Provider} from 'react-redux'
import {createStore} from "redux";
import reducers from './17-redux-songs/reducers'

ReactDOM.render(
    <Provider store={createStore(reducers)}>
      <App/>
    </Provider>,
    document.getElementById("root")
);