import db from "$lib/db";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const colleges = JSON.stringify(await db.collection('colleges').find().toArray());

  return {
    status: 200,
    colleges
  };
};

