<script lang="ts">
  import { get_two_random_colleges, compare_colleges } from "$lib/helpers";
  import type { PageData } from "./$types";

  export let data: PageData;

  const colleges: College[] = JSON.parse(data.colleges_json_str);
  let [uni1, uni2] = get_two_random_colleges(colleges);

  const click_left_uni = () => {
    fetch("/", {
      method: "PUT",
      body: JSON.stringify({ uni_a: uni1, uni_b: uni2, uni_a_won: true }),
    });
    const [dRa, dRb] = compare_colleges(uni1, uni2, true);
    uni1.rating += dRa;
    uni2.rating += dRb;
    [uni1, uni2] = get_two_random_colleges(colleges);
  };

  const click_right_uni = () => {
    fetch("/", {
      method: "PUT",
      body: JSON.stringify({ uni_a: uni1.name, uni_b: uni2.name, uni_a_won: false }),
    });
    const [dRa, dRb] = compare_colleges(uni1, uni2, true);
    uni1.rating += dRa;
    uni2.rating += dRb;
    [uni1, uni2] = get_two_random_colleges(colleges);
  };
</script>

<main class="flex flex-col gap-4 px-4">
  <div class="text-center text-2xl font-bold">
    Were we let in for our looks? No. Will we judge them for theirs? Yes.
    <!-- ORIGINAL TEXT ON THE WEBSITE -->
    <!-- Were we let in for our looks? No. Will we be judged on them? Yes. -->
    <!-- ============================ -->
  </div>

  <div class="text-center text-4xl font-bold">Who's Hotter? Click to Choose.</div>

  <!-- IMAGE SELECTION -->
  <div class="mt-8 flex flex-row justify-center">
    <div class="align-center flex flex-row items-center gap-6 text-xl">
      <button on:click={click_left_uni} class="flex flex-col items-center gap-4">
        <img src={uni1.image} alt={uni1.name} class="w-[28rem] select-none border border-black" />
      </button>

      <span>OR</span>

      <button on:click={click_right_uni} class="flex flex-col items-center gap-4">
        <img src={uni2.image} alt={uni2.name} class="w-[28rem] select-none border border-black" />
      </button>
    </div>
  </div>
</main>
