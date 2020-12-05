const header = document.getElementById("journal-header");

// used to track date for journal entry
export default () => {
  const dt = new Date();
  header.innerHTML = dt.toLocaleDateString();
};