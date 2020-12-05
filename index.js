import form from "./src/components";

const root = document.getElementById("root");

const render = () => {
  root.innerHTML = form();
};

render();
