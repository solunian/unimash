<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  const colleges = JSON.parse(data.colleges);
</script>

{#each colleges as college}
  <span>{college.name}</span>
  <span>{college.rating}</span>
{/each}
