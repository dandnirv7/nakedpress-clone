import { createPinia } from "pinia";
const pinia = createPinia();

import * as storeModules from "./store-modules";

export const {
  useBlogInspirationStore,
  useDailyKidsProductStore,
  useDeliveryAreaStore,
  useDetoxProductStore,
  useFaqStore,
  useMessageProcedureStore,
  useOneLiterProductStore,
  useShopCategoryStore,
  useShopNeedStore,
  useSubscriptionsStore,
  useSubscriptionsOneLiterStore,
  useWeightLossProgramStore,
  useFeaturedSubscriptionsStore,
  useFaqSubscriptionsStore,
  useWeek5SubscriptionsStore,
  useDetoxSubscriptionsStore,
  useDailyProduct330MlStore,
  useMerchandisesStore,
  useFaqStoreLocationStore,
  useBlogCategoryStore,
  useBlogArticleStore,
  useMaagGerdBlogStore,
  useObesitasBlogStore,
  useMenstruationBlogStore,
  useAutoimmuneBlogStore,
  usePromilBlogStore,
  useCholesterolBlogStore,
  usePaginationStore,
  useStoreBlogStore,
} = storeModules;

export { pinia };

export default pinia;
