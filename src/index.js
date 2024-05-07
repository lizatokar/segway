import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import data from "./Data/data";
import buttons from "./Data/buttons";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App data={data} buttons={buttons}/>);
