<template>
  <div class="flex flex-col items-center justify-center w-screen h-screen text-gray-100 bg-gray-900">
    <h1 class="text-5xl font-thin">Laravel Boilerplate</h1>
    <h2>For Laravel {{ version }}</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  setup(props, { root }) {
    // @ts-ignore
    const version = ref<string>(root.$page.app.laravel);

    return {
      version,
    };
  },
});
</script>
