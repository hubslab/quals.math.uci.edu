<template>
  <div class="flex flex-col itmes-center">
    <AppHeader class="sticky top-0" />
    <main class="p-4">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
