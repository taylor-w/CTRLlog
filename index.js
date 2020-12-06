import { form, settings } from "./components/index.js";

const root = document.getElementById("root");

const render = () => {
  root.innerHTML = `
  ${form()}
  `;
};

render();
settings();
