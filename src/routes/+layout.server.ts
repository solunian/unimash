import db from "$lib/db";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async () => {
  const colleges = JSON.stringify(await db.collection('colleges').find().toArray());

  return {
    colleges
  };
};

