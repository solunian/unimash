import { get_all_colleges } from "$lib/db";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async () => {
  const colleges_json_str = JSON.stringify(await get_all_colleges());

  return {
    colleges_json_str,
  };
};
