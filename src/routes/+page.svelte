<script lang="ts">
  import { get_two_random_colleges } from "$lib/helpers";
  import type { PageData } from "./$types";

  export let data: PageData;

  const colleges: College[] = JSON.parse(data.colleges_json_str);
  const [uni1, uni2] = get_two_random_colleges(colleges);
</script>

<main class="mt-10 flex flex-col gap-4 px-4">
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
      <span class="flex flex-col items-center gap-4">
        <img src={uni1.image} alt={uni1.name} class="aspect-video w-[28rem] border border-black" />

        <!-- <span class="text-teal-600">{"Harvard"}</span> -->
      </span>

      <span>OR</span>

      <span class="flex flex-col items-center gap-4">
        <img src={uni2.image} alt={uni2.name} class="aspect-video w-[28rem] border border-black" />

        <!-- <span class="text-teal-600">{"MIT"}</span> -->
      </span>
    </div>
  </div>
</main>
