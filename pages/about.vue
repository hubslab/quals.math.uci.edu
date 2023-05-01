<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
    <NuxtLink v-for="contributor in contributors" :key="contributor.name" :to="contributor.url">
      <AppCard class="flex flex-row gap-4 bg-white hover:bg-gray-200 transition">
        <div>
          <img
            :src="contributor.avatar || getAvatar(contributor.name)"
            alt="Information's Avatar"
            class="w-16 h-16"
          >
        </div>
        <div class="flex flex-col">
          <h1 class="text-2xl">
            {{ contributor.name }}
          </h1>
          <p class="text-gray-500">
            {{ contributor.role }}
          </p>
        </div>
      </AppCard>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
interface Contributor {
  name: string
  role: string
  avatar?: string
  url?: string
}

function getAvatar (name: string): string {
  return `https://ui-avatars.com/api/?background=335fdc&color=fff&name=${encodeURIComponent(name)}`
}

const contributors: Contributor[] = (await queryContent('/contributors').only(['body']).findOne()).body
  .sort((a: Contributor, b: Contributor) => a.name.localeCompare(b.name))

useHead({
  title: 'About'
})
</script>
