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

function sortContributor (a: Contributor, b: Contributor) {
  const roleMap: {
    [key: string]: number
  } = {
    developer: 1,
    coordinator: 2,
    student_associate: 3
  }

  const aRole = roleMap[a.role.replaceAll(' ', '_').toLowerCase()]
  const bRole = roleMap[b.role.replaceAll(' ', '_').toLowerCase()]

  if (aRole && bRole && aRole !== bRole) {
    return aRole - bRole
  }

  const aLastName = a.name.split(' ').at(-1) || a.name
  const bLastName = b.name.split(' ').at(-1) || b.name

  return aLastName.localeCompare(bLastName)
}

const contributors: Contributor[] = (await queryContent('/contributors')
  .only(['body'])
  .findOne()).body
  .sort(sortContributor)

useHead({
  title: 'About'
})
</script>
