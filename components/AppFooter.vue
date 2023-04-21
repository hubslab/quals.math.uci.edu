<template>
  <footer class="bg-blue-700 text-white flex flex-row gap-4 items-center justify-between p-4 shadow-md">
    <div class="text-center flex-1">
      <span>
        © 2023 - {{ (new Date()).getFullYear() }}
      </span>
      <NuxtLink to="https://math.uci.edu" class="hover:text-blue-400 transition">
        UC Irvine Math Department
      </NuxtLink>
    </div>
    <div class="flex-1 flex flex-col flex-wrap">
      <div>Other Links:</div>
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
}, {
  title: 'Prof. Zhiqin Lu\'s Homepage',
  url: 'https://lu.math.uci.edu'
}]
</script>
