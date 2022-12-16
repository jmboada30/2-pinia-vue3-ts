import { defineStore } from "pinia";

interface CounterOptionsState {
  count: number;
  lastChaned: Date | undefined;
}

export const useCounterOptionsStore = defineStore("counterOptions", {
  state: () =>
    ({
      count: 0,
      lastChaned: undefined,
    } as CounterOptionsState),
  getters: {
    squaredCount: (state) => state.count * state.count,
  },
  actions: {
    incrementBy(amount: number) {
      this.count += amount;
      this.lastChaned = new Date();
    },

    incrementByOne() {
      this.incrementBy(1);
    },

    decrementBy(amount: number) {
      this.count -= amount;
      this.lastChaned = new Date();
    },

    decrementByOne() {
      this.decrementBy(1);
    },
  },
});
