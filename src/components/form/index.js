import text from "./text.js";

export default () => `
<form>
<label for="journal">
  <span id="left-nav">&#8592;</span>
    <span id="journal-header">
      Date/Time *css class w/ js*
    </span>
  <span id="right-nav">&#8594;</span>
</label>
${text()}
</form>
`;
