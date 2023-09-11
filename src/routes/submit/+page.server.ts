import type { Actions } from "./$types";
import { add_college } from "$lib/db";

export const actions: Actions = {
  default: async ({ request }) => {
    const val = await request.formData();
    await add_college(<string>val.get("name"), <string>val.get("image"));
  },
};
