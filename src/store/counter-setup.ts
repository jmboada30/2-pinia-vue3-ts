import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterSetupStore = defineStore("counterSetup", () => {
  const count = ref<number>(0);
  const lastChanged = ref<Date | undefined>(undefined);

  const incrementBy = (value: number) => {
    count.value += value;
    lastChanged.value = new Date();
  };

  const decrementBy = (value: number) => {
    count.value -= value;
    lastChanged.value = new Date();
  };

  return {
    // state
    count,
    lastChanged,

    // getters
    squareCount: computed(() => count.value * count.value),

    // actions
    incrementBy,
    decrementBy,
    incrementByOne: () => incrementBy(1),
    decrementByOne: () => decrementBy(1),
  };
});
