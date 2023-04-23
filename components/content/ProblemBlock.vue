<template>
  <div>
    <div class="text-red-500">
      <h2 :id="`problem-${number}`" class="my-1">
        Problem {{ number }}
      </h2>
      <hr class="my-1 border-black border rounded-full">
      <slot name="problem" />
    </div>
    <div>
      <h3 :id="`proof-${number}`" class="my-1">
        Proof
      </h3>
      <hr class="my-1 border-black border rounded-full">
      <slot name="proof" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  number: number
}>()
</script>
