<template>
  <header class="bg-blue-700 shadow-md text-white px-4 py-3 flex flex-row items-center gap-4">
    <div class="bg-blue-500 p-3 rounded-full shadow-md">
      <img class="w-6 h-auto sm:w-10" src="/logo.webp" alt="Quals Logo">
    </div>
    <NuxtLink to="/">
      <div
        class="bg-blue-500 py-2 px-4
      rounded-md text-sm font-bold hover:scale-105 transition shadow-md
      sm:text-xl"
      >
        UC Mathematics Qualifying Exams Home
      </div>
    </NuxtLink>
    <NuxtLink to="/about">
      <div
        class="bg-blue-500 py-2 px-4
      rounded-md text-sm font-bold hover:scale-105 transition shadow-md
      sm:text-xl"
      >
        About
      </div>
    </NuxtLink>
  </header>
</template>
