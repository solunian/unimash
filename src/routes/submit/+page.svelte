<div class="mt-20 flex flex-row justify-center">
  <form method="POST" class="flex flex-col items-center gap-2">
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
