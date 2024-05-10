<template>
    <div
      class="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-md"
      v-if="show"
    >
      {{ message }}
      <button
        class="ml-4 text-white hover:text-gray-300"
        @click="close"
      >
        &times;
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        show: false,
        message: '',
      };
    },
    methods: {
      open(message) {
        this.message = message;
        this.show = true;
        setTimeout(() => {
          this.close();
        }, 3000);
      },
      close() {
        this.show = false;
      },
    },
  };
  </script>