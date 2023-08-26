import { createPinia } from "pinia";
const pinia = createPinia();

import {
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
} from "./store-modules";

export {
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
  pinia,
};

export default pinia;
