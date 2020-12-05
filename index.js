import form from "./src/components/form";

const root = document.getElementById("root");

const render = () => {
  root.innerHTML = form();
};
