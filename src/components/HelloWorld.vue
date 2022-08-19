<script setup lang='ts'>
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class='greetings'>
    <h1 class='green'>{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a target='_blank' href='https://vitejs.dev/'>Vite</a> +
      <a target='_blank' href='https://vuejs.org/'>Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 28px;
  top: -20px;
}

h3 {
  font-size: 24px;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
