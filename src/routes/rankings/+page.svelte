<script lang="ts">
  import { sort_colleges } from "$lib/helpers";
  import type { PageData } from "./$types";

  export let data: PageData;

  const colleges: College[] = JSON.parse(data.colleges_json_str);
  sort_colleges(colleges);
</script>

<div class="flex flex-row justify-center px-4">
  <div class="flex flex-col border">
    {#each colleges as college, idx}
      <div class="flex flex-row justify-between border px-1">
        <span class="font-bold">{idx + 1}</span>
        <span class="px-8">{college.name}</span>
        <span>{Math.round(college.rating)}</span>
      </div>
    {/each}
  </div>
</div>
