<template>
  <div>
    <NuxtLayout>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 grid-cols-1">
        <div
          v-for="entry in postMap"
          :key="entry[0]"
          class="bg-sky-100 rounded-md p-4 shadow-md"
        >
          <h2 class="capitalize font-bold text-3xl">
            {{ entry[0].replaceAll('-', ' ') }}
          </h2>
          <ul>
            <li v-for="(item, index) in entry[1].sort(sortPosts)" :key="`${entry[0]}-${item.title}`">
              <span class="w-6 inline-block">{{ index + 1 }}.</span>
              <NuxtLink :to="item.path" class="capitalize hover:text-blue-400 transition text-xl">
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const posts = await queryContent('/posts').only(['_path', '_dir']).find()

// Map<type, [{title, path}]>
interface Post {
  title: string
  path: string
}

const postMap = new Map<string, Post[]>()

for (const post of posts) {
  if (!postMap.has(post._dir)) {
    postMap.set(post._dir, [])
  }

  postMap.get(post._dir)?.push({
    title: post._path.split('/').at(-1).replaceAll('-', ' '),
    path: post._path
  })
}

function sortPosts (a: Post, b: Post) {
  const aPath = a.path.split('/').at(-1) as string
  const bPath = b.path.split('/').at(-1) as string

  const [aYear, aQuarter] = aPath.split('-')
  const [bYear, bQuarter] = bPath.split('-')

  if (aYear !== bYear) {
    return parseInt(bYear) - parseInt(aYear)
  }

  return aQuarter.localeCompare(bQuarter)
}

useHead({
  title: 'Home'
})
</script>
