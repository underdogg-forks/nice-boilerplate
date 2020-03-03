<template>
  <!-- Use the classes "text-on-background bg-background" instead if you're using Tailwind Theming -->
  <div class="flex flex-col items-center justify-center w-screen h-screen bg-gray-900 text-gray-50">
    <h1 class="text-5xl font-thin">{{ $t('app.welcome.title') }}</h1>
    <h2>{{ $_('app.welcome.subtitle', { version }) }}</h2>
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
