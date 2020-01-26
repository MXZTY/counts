import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Counts from "./components/counts";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<Counts />, document.getElementById("root"));

serviceWorker.unregister();
