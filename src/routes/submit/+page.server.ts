import type { Actions } from "./$types";

export const actions: Actions = {
  default: async ({ request }) => {
    const val = await request.formData();
    console.log(val.get("name"), val.get("image"));
  },
};
