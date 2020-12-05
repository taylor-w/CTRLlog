import rightnav from "./rightnav.js";
import text from "./text.js";

export default () => `
<form>
<label for="journal">
  <span id="left-nav">&#8592;</span>
    <span id="journal-header">
      Date/Time *css class w/ js*
    </span>
  ${rightnav()}
</label>
${text()}
</form>
`;
