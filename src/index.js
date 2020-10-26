import React from "react";
import ReactDOM from "react-dom";
// import App from './18-redux-thunk/components/App'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from "redux";
import reducers from './18-redux-thunk/reducers'
import thunk from 'redux-thunk'
import App from './27-the-context/components/App'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// ReactDOM.render(
//     <Provider
//         store={createStore(reducers, composeEnhancers(applyMiddleware(thunk)))}>
//       <App/>
//     </Provider>,
//     document.getElementById("root")
// );

ReactDOM.render(<App/>, document.querySelector('#root'));