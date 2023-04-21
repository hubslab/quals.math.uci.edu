<template>
  <div>
    <NuxtLayout>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 grid-cols-1">
        <div
          v-for="entry in postMap"
          :key="entry[0]"
          class="bg-sky-100 rounded-md p-4 shadow-md"
        >
          <h2 class="capitalize font-bold text-2xl">
            {{ entry[0] }} Qualification
          </h2>
          <ul>
            <li v-for="(item, index) in entry[1]" :key="`${entry[0]}-${item[0]}`">
              <span class="mr-2">{{ index + 1 }}.</span>
              <NuxtLink :to="item[1]" class="capitalize hover:text-blue-400 transition">
                {{ item[0] }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const posts = await queryContent('/posts').only(['_path', '_dir', 'title']).find()

// Map<type, Map<title, path>>
const postMap = new Map<string, Map<string, string>>()

for (const post of posts) {
  if (!postMap.has(post._dir)) {
    postMap.set(post._dir, new Map<string, string>())
  }

  postMap.get(post._dir)?.set(post.title, post._path)
}
</script>
