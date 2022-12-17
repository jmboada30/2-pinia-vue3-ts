import { defineStore } from "pinia";

interface CounterOptionsState {
  count: number;
  lastChanged: Date | undefined;
}

export const useCounterOptionsStore = defineStore("counterOptions", {
  state: () =>
    ({
      count: 0,
      lastChanged: undefined,
    } as CounterOptionsState),
  getters: {
    squaredCount: (state) => state.count * state.count,
  },
  actions: {
    incrementBy(amount: number) {
      this.count += amount;
      this.lastChanged = new Date();
    },

    incrementByOne() {
      this.incrementBy(1);
    },

    decrementBy(amount: number) {
      this.count -= amount;
      this.lastChanged = new Date();
    },

    decrementByOne() {
      this.decrementBy(1);
    },
  },
});
