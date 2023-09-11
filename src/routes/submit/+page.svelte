<script lang="ts">
  import type { ActionData } from "./$types";

  export let form: ActionData;
</script>

<div class="flex flex-row justify-center">

  <form method="POST" class="flex flex-col items-center gap-2">
    
    <!-- FORM SUBMIT STATUS -->
    {#if form?.success}
      <div class="my-4 border w-full text-center bg-green-300">
        successfully submitted!
      </div>
    {:else if form?.success === false}
    <!-- ^ this looks so ugly, darned javascript with its loose equality!! >:( -->
      <div class="my-4 border w-full text-center bg-red-300">
        failed to submit...
      </div>
    {/if}

    <label>
      name:<input name="name" type="text" />
    </label>

    <label>
      image link:<input name="image" type="text" />
    </label>

    <button type="submit" class="w-fit"> submit </button>
  </form>
</div>

<style lang="postcss">
  input,
  button {
    @apply border p-1 outline-none;
  }

  input:focus,
  button:focus {
    @apply shadow;
  }
</style>
