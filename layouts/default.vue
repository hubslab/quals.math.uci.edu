<template>
  <div class="flex flex-col items-center">
    <AppHeader class="sticky top-0 w-full z-50" />
    <main class="p-4 w-full">
      <slot />
    </main>
    <AppFooter class="w-full" />
  </div>
</template>
