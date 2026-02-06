<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="app">
    <h1>💖 Hello World!</h1>
    <p>Welcome to your Electron application with Vue 3</p>
    <div class="counter">
      <button
        @click="count--"
      >
        -
      </button>
      <span>{{ count }}</span>
      <button
        @click="count++"
      >
        +
      </button>
    </div>
  </div>
</template>

<style lang="less">
.app {
  padding: 20px;
  text-align: center;

  h1 {
    color: #42b983;
  }

  .counter {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    button {
      padding: 5px 15px;
      cursor: pointer;
      border: 1px solid #ddd;
      border-radius: 4px;
      background: #fff;

      &:hover {
        background: #f0f0f0;
      }
    }

    span {
      min-width: 30px;
      font-size: 18px;
    }
  }
}
</style>
