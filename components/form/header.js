const dt = new Date();

export default () => `
<span id="journal-header">
  ${dt.toLocaleDateString()}
</span>
`;
