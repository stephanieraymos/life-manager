<template>
  <button :style="{ backgroundColor: props.color }" class="general-button">
    {{ props.text }}
  </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['color', 'text']);
</script>

<style>
/* Apply styles directly to the button element */
button.general-button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
}
</style>
