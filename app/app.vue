<template>
  <div>
    <h1>Hello from Nuxt 4!</h1>
    <button @click="greet('Foo')">
      Greet 1
    </button> <!-- All good -->
    <button @click="greet()">
      Greet 2
    </button> <!-- Should fail -->
  </div>
</template>

<script setup lang="ts">
const x = 'oi!'

type Ola = 1 | 2

const y: Ola = 3

const myArray = [1, 2, 4]

function greet(personName: string) {
  console.log(`Hi ${personName}!`)
}
</script>

<style scoped></style>
