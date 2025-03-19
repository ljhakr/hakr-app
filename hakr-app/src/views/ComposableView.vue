<script setup>
import { useCounter } from "@/use/useCounter"

const {increaseCount, counter} = useCounter();
</script>

<template>
  <div class="posts">
    <h1>Composable</h1>

    <button class="bg-orange p-3 text-white" @click="increaseCount">Increase count</button>
    {{ `The count is: ${counter}` }}
  </div>
</template>
