<script setup lang='ts'>
import TheWelcome from '@/components/TheWelcome.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const handleTest = () => {
  router.push({ name: 'about' })
}
</script>

<template>
  <main>
    <van-button type='primary' size='large' @click='handleTest'>222ee</van-button>
    <TheWelcome />
  </main>
</template>
