<template>
  <header
    class="bg-blue-700 shadow-md text-white px-3 py-3 flex flex-row items-center
  justify-center sm:justify-normal gap-3"
  >
    <div class="bg-blue-500 p-3 rounded-full shadow-md hidden sm:block">
      <img class="h-auto w-8" src="/logo.webp" alt="Quals Logo">
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
