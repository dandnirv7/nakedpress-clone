import { createPinia } from "pinia";
const pinia = createPinia();

import * as storeModules from "./store-modules";

export const {
  useAllShowProductsStore,
  usePaginationStore,
  useStoreBlogStore,
  useDataStoriesStore,
} = storeModules;

export { pinia };

export default pinia;
