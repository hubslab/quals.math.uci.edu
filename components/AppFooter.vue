<template>
  <footer class="bg-blue-700 flex flex-row items-center gap-4 text-white p-4 shadow-md text-xl">
    <div>Other Links:</div>
    <div class="flex-1 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      <div v-for="item in links" :key="item.title">
        <NuxtLink :to="item.url" class="hover:text-blue-400 transition">
          {{ item.title }}
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const links = [{
  title: 'Geometry Discovery Project',
  url: 'https://gdp.math.uci.edu'
}]
</script>
