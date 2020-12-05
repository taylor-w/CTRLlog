const header = document.getElementById("journal-header");

const date = () => {
  const dt = new Date();
  header.innerHTML = dt.toLocaleDateString();
};

export default () => `
<span id="journal-header">
  ${date()}
</span>
`;
