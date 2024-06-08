import { writable } from 'svelte/store';

const createMediaQueryStore = (query: any) => {
  const { subscribe, set } = writable(false);

  const update = () => {
    set(window.matchMedia(query).matches);
  };

  if (typeof window !== 'undefined') {
    const mediaQueryList = window.matchMedia(query);
    mediaQueryList.addListener(update);
    update();
  }

  return { subscribe };
};

export const smallScreen = createMediaQueryStore('(max-width: 600px)');
export const mediumScreen = createMediaQueryStore('(min-width: 601px) and (max-width: 1200px)');
export const largeScreen = createMediaQueryStore('(min-width: 1200px)');
