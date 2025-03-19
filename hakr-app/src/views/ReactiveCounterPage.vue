<script setup>
import PageHeading from '@/components/PageHeading.vue';
import ReactiveBookCounter from '@/components/ReactiveBookCounter.vue';
import ButtonCounter from "@/components/ButtonCounter.vue";
</script>

<template>
  <div class="container bg-white mb-10">
    <div class="mx-auto text-center">
      <PageHeading :title="'Reactive book counter'"></PageHeading>
      <div class="columns-1">
        <div class="w-full text-center mb-8">
          <ReactiveBookCounter></ReactiveBookCounter>
        </div>

        <hr class="border-t-2 border-gray-200 mb-8">

        <div class="w-full text-center mb-8">
          <ButtonCounter></ButtonCounter>
        </div>
      </div>
    </div>
  </div>
</template>
