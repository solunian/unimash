<script lang="ts">
  import { sort_colleges } from "$lib/helpers";
  import type { PageData } from "./$types";

  export let data: PageData;

  const colleges: College[] = JSON.parse(data.colleges_json_str);
  sort_colleges(colleges);
</script>

{#each colleges as college}
  <div>
    <span>{college.name}</span>
    <span>{college.rating}</span>
  </div>
{/each}
