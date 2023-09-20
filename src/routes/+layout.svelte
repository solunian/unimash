<script lang="ts">
  import "../app.css";
</script>

<header class="mb-16 bg-red-800 py-4 text-center">
  <a href="/" class="text-5xl font-bold text-white">UNIMASH</a>
</header>

<slot />

<nav class="mb-8 mt-16 flex flex-row justify-center gap-4 font-semibold">
  <a href="/">Home</a>
  <a href="/submit">Submit</a>
  <a data-sveltekit-reload href="/rankings">Rankings</a>
  <a href="/about">About</a>
  <!-- <a href="/">Previous</a> -->
</nav>
