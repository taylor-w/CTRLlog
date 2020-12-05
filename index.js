import { form } from "./components/index.js";

const root = document.getElementById("root");

const render = () => {
  root.innerHTML = form();
};

render();
