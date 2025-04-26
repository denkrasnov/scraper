import "normalize.css/normalize.css";
import "core-js/stable";
import "regenerator-runtime/runtime";

import "./initial.css";
import { createRoot } from "react-dom/client";

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(<App />);
