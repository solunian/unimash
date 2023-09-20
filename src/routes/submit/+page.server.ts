import type { Actions } from "./$types";
import { add_college } from "$lib/db";
import { is_formdata_valid } from "$lib/helpers";
import { createHash } from "crypto";

// generated from a Node.js repl
const PASSWORD_HASH = "3ba6228ed76ed5a06672795c70cdee3ba0eb01479256defcbf381cb8dbe6be1e";
function hash(val: string) {
  return createHash("sha256").update(val).digest("hex");
}

export const actions: Actions = {
  default: async ({ request }) => {
    const val = await request.formData();

    const name = <string>val.get("name");
    const image = <string>val.get("image");
    const password = <string>val.get("password");

    if (is_formdata_valid(name, image) && hash(password) === PASSWORD_HASH) {
      await add_college(name, image);
      return {
        success: true,
      };
    } else {
      return {
        success: false,
      };
    }
  },
};
