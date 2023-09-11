<script lang="ts">
  import "../app.css";
</script>

<header class="bg-red-800 py-4 text-center">
  <a href="/" class="text-5xl font-bold text-white">UNIMASH</a>
</header>

<slot />

<nav class="mt-16 flex flex-row justify-center gap-4 font-semibold">
  <a href="/about">About</a>
  <a href="/submit">Submit</a>
  <a href="/rankings">Rankings</a>
  <a href="/">Previous</a>
</nav>
