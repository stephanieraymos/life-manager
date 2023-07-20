<template>
  <div :style="{ backgroundColor: props.color }" class="modal">
    <span @click="onClose">Close</span>
    <!-- Slot to receive the dynamic component from the parent -->
    <h1>{{ props.title }}</h1>
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps(['color', 'title', 'isModalOpen']);
// const { emit } = defineEmits(['close']);
const emit = defineEmits(['close']);
// Method to emit the 'close' event when the "Close" button is clicked
const onClose = () => {
  emit('close');
};
</script>

<style>
/* Apply styles directly to the button element */
.modal {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  width: 500px;
  height: 500px;
  margin: 0 auto;
  border-radius: 10px;
  background: var(--dark-color-2);
}
</style>
