/**
 * Entry point of application, where App is rendered within the div with the id of "app" 
 */

import React from "react";
// import { render } from "react-dom";
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);
import App from "./App";

// render(<App></App>, document.getElementById("app"));
root.render(<App></App>);