<script setup lang="ts">
import PageHeading from '@/components/PageHeading.vue';
import {ref} from "vue";

const names = ['Matthew', 'Elijah', 'Liam', 'Noah', 'Oliver', 'James', 'Benjamin', 'Lucas', 'Mason', 'Ethan'];
const selectedName = ref('');




</script>
<template>
  <div class="container bg-white mb-10">
    <div class="mx-auto text-center">
      <PageHeading :textClass="'mb-20'" :title="'Playground'"></PageHeading>
    </div>

    <div class="mb-5 w-1/2">
      <input type="text" v-model="selectedName" placeholder="Type to filter names..." class="mb-4 p-2 border rounded">

      <ul class="list-disc">
        <li v-for="name in names.filter(n => n.toLowerCase().includes(selectedName.toLowerCase()))"
            :key="name">
          {{ name }}
        </li>
      </ul>
    </div>
  </div>
</template>
