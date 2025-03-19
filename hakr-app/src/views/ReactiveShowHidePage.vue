<script setup>
import PageHeading from '@/components/PageHeading.vue';
import ReactiveShowHide from '@/components/ReactiveShowHide.vue';
</script>

<template>
  <div class="container bg-white mb-10">
    <div class="mx-auto text-center">
      <PageHeading :title="'Read more fold out'"></PageHeading>
      <div class="columns-1">
        <div class="w-full text-center mb-8">
          <ReactiveShowHide></ReactiveShowHide>
        </div>
      </div>
    </div>
  </div>
</template>
