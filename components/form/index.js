import header from "./header.js";
import leftnav from "./leftnav.js";
import rightnav from "./rightnav.js";
import text from "./text.js";

export default () => `
<form>
<label for="journal">
  ${leftnav()}
    ${header()}
  ${rightnav()}
</label>
${text()}
</form>
`;
