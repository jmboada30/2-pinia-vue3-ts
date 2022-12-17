import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterSetupStore = defineStore("counterSetup", () => {
  // state
  const count = ref<number>(0);
  const lastChaned = ref<Date | undefined>(undefined);

  // getters
  const squaredCount = computed(() => count.value * count.value);

  // actions
  const incrementBy = (amount: number) => {
    count.value += amount;
    lastChaned.value = new Date();
  };

  const incrementByOne = () => {
    incrementBy(1);
  };

  const decrementBy = (amount: number) => {
    count.value -= amount;
    lastChaned.value = new Date();
  };

  const decrementByOne = () => {
    decrementBy(1);
  };

  return {
    count,
    incrementByOne,
    incrementBy,
    decrementByOne,
    decrementBy,
  };
});
