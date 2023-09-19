import { update_college_rating } from "$lib/db";
import { compare_colleges } from "$lib/helpers";
import type { RequestHandler } from "@sveltejs/kit";

interface ClickData {
  uni_a: College;
  uni_b: College;
  uni_a_won: boolean;
}

export const PUT: RequestHandler = async ({ request }) => {
  const body = await request.json();
  const { uni_a, uni_b, uni_a_won } = <ClickData>body;

  const [dRa, dRb] = compare_colleges(uni_a, uni_b, uni_a_won);
  // console.log(`${uni_a.name}: ${dRa}`, `${uni_b.name}: ${dRb}`);

  Promise.all([update_college_rating(uni_a.name, dRa), update_college_rating(uni_b.name, dRb)]);

  return new Response("cool beans!");
};
