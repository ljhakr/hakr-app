<script setup lang="ts">
import PageHeading from '@/components/PageHeading.vue';
import {ref} from "vue";

const names = ['Matthew', 'Elijah', 'Liam', 'Noah', 'Oliver', 'James', 'Benjamin', 'Lucas', 'Mason', 'Ethan'];
const selectedName = ref('');

// Simple runtime helper
const getType = (v: unknown): string => typeof v;


//========================================================================
function greet(name: string): string {
  return name;
}

function numb(numb1: number, numb2: number): number {
  return numb1 + numb2;
}

type AddFunction = (x: number, y: number) => number;
const add: AddFunction = (a, b) => {
    return a + b + typeof b; // This will convert string to number if needed
};
//========================================================================
const myNumber = 20;

interface Product {
  name: string;
  price: number;
  availability: number;
}
const products: Product[] = [
  { name: 'Apple', price: 1.2, availability: 100 },
  { name: 'Banana', price: 0.8, availability: 50 },
  { name: 'Orange', price: 1.5, availability: 75 },
  { name: 'aTest', price: 1.5, availability: 1 },
  { name: 'aTest2', price: 1.52, availability: 2 }
  
];
//========================================================================
// 1. Define the type alias
type StringToNumberFunction = (input: string) => number;
// 2. Implement a function that matches the type alias
const stringLength: StringToNumberFunction = (str) => {
    return str.length;
};
//========================================================================
type SomeDataObj = {
    isActive: boolean;
    name: string;
    age: number;
};
const someData: SomeDataObj = {
    isActive: true,
    name: "Test",
    age: 30
};
// ========================================================================
</script>
<template>
  <div class="container bg-white mb-10">
    <div class="mx-auto text-center">
      <PageHeading :textClass="'mb-20'" :title="'Playground'"></PageHeading>
    </div>
    <hr>
      <p>greet: {{ getType(greet('66')) }}</p>
      <p>numb: {{ numb(5, 6) }}</p>
      <p>add: {{ add(5, 6) }}</p>
      <p>stringLength: {{ stringLength('19') }}</p>
    <hr>

      <ul>
          <li v-for="(product, index) in products" :key="index">
              {{ product.name }} - ${{ product.price }} ({{ product.availability }} available)
          </li>
      </ul>
      <hr>

    <ul class="list-disc">
      <li v-for="(value, key) in someData" :key="key">{{ key }}: {{ value }}</li>
    </ul>
    <hr>

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