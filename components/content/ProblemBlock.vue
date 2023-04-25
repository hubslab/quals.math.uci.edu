<template>
  <AppCard class="bg-amber-50 w-full">
    <div class="text-red-500">
      <h2 :id="`problem-${number}`" class="my-1">
        Problem {{ number }}
      </h2>
      <hr class="mt-1 mb-2 border-black border rounded-full">
      <slot name="problem" />
    </div>
    <div>
      <h3 :id="`proof-${number}`" class="my-1">
        Proof
      </h3>
      <hr class="mt-1 mb-2 border-black border rounded-full">
      <slot name="proof" />
    </div>
    <div v-if="$slots.remark">
      <h3 :id="`remark-${number}`" class="my-1">
        Remark
      </h3>
      <hr class="mt-1 mb-2 border-black border rounded-full">
      <slot name="remark" />
    </div>
  </AppCard>
</template>

<script setup lang="ts">
defineProps<{
  number: number
}>()
</script>
