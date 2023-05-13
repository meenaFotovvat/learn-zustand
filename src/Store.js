import { create } from "zustand";

export const createCounterStore = ((set, get) => ({
  number: 123,
  increaseCounterNumber: () => set((state) => ({ number: state.number + 1 })),
  decreaseCounterNumber: () => set((state) => ({ number: state.number - 1 })),
  logNumber: () => {
    console.log(`current number value equals ${get().number}`);
  },
}));

const createPokemonStore = (set) => ({
  pokemon: [],
  fetchPokemon: async () => {
    await fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => set({ pokemon: data.results }));
  },
});

export const useCombinedStore = create((...params) => ({
    ...createPokemonStore(...params),
    ...createCounterStore(...params)
}))
