import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "mobx-react";
import { store } from "./models/store";
// import App from './App';
import AppWrapper from "./AppWrapper";

import * as serviceWorker from "./serviceWorker";

const storeState = store.create()

ReactDOM.render(<Provider storeState={storeState}><AppWrapper /></Provider>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
