import { defineStore } from 'pinia';
import { ref, computed } from 'vue'

export const useCountStore = defineStore('count2', () => {
  const count = ref(0)
  const name = ref('Lucas')
  const doubleCount = computed(() => count.value * 2)
  // const doubleCount = count.value * 2
  function increment() {
    count.value++
  }

  return { count, name, doubleCount, increment }
});

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
