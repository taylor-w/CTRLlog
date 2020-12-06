import { form } from "./components/index.js";
import theme from "./components/form/theme.js";

const root = document.getElementById("root");

const render = () => {
  root.innerHTML = form();
  theme();
};

render();
