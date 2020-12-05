import leftnav from "./leftnav.js";
import rightnav from "./rightnav.js";
import text from "./text.js";

export default () => `
<form>
<label for="journal">
  ${leftnav()}
    <span id="journal-header">
      Date/Time *css class w/ js*
    </span>
  ${rightnav()}
</label>
${text()}
</form>
`;
