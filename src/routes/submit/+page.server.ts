import type { Actions } from "./$types";
import { add_college } from "$lib/db";
import { is_formdata_valid } from "$lib/helpers";

export const actions: Actions = {
  default: async ({ request }) => {
    const val = await request.formData();

    const name = <string>val.get("name");
    const image = <string>val.get("image");

    if (is_formdata_valid(name, image)) {
      await add_college(name, image);
      return {
        success: true,
      }
    } else {
      return {
        success: false,
      }
    }
  },
};
