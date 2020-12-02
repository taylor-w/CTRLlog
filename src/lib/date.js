const header = document.getElementById("journal-header");

export default () => {
  const dt = new Date();
  header.innerHTML = dt.toLocaleDateString();
};
