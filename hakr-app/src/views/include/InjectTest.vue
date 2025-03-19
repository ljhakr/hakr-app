<script setup>
import {inject} from "vue";

const myInject = inject('source-type');

</script>
<template>
  <div>
<h2>{{ myInject }}</h2>
  </div>
</template>
