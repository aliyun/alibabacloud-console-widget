import {
  Fetcher,
  createFetcher
} from '@alicloud/fetcher';
import interceptCacheLocal from '@alicloud/fetcher-interceptor-cache-local';
import interceptMerger from '@alicloud/fetcher-interceptor-merger';
import interceptBiz from '@alicloud/console-fetcher-interceptor-res-biz';
import interceptSecurity from '@alicloud/console-fetcher-interceptor-req-security';
import interceptFecs from '@alicloud/console-fetcher-interceptor-fecs';
import interceptErrorMessage from '@alicloud/console-fetcher-interceptor-res-error-message';
import interceptArms from '@alicloud/console-fetcher-interceptor-arms';
import interceptSls from '@alicloud/console-fetcher-interceptor-sls';

import {
  IConsoleFetcher,
  IConsoleFetcherConfig,
  IConsoleFetcherInterceptorOptions
} from '../types';
import {
  ETypeApi
} from '../const';

import createApi from './create-api';
import createApiAutoMulti from './create-api-auto-multi';

export default <C extends IConsoleFetcherConfig = IConsoleFetcherConfig>(config?: C, interceptorOptions: IConsoleFetcherInterceptorOptions = {}): IConsoleFetcher<C> => {
  const {
    slsConfig,
    armsConfig
  } = interceptorOptions;
  const fetcher = createFetcher<C>(config) as unknown as Fetcher<IConsoleFetcherConfig>; // FIXME
  
  // 顺序很重要...
  interceptBiz(fetcher);
  interceptCacheLocal(fetcher); // 必须在 Biz 之后，因为 biz 结果的处理影响缓存的数据
  interceptMerger(fetcher); // 必须在 CacheLocal 之后，因为 CacheLocal 有类似的逻辑，且 cache 会优先于 merger
  interceptSecurity(fetcher);
  interceptErrorMessage(fetcher);
  interceptFecs(fetcher);
  interceptArms(fetcher, armsConfig);
  
  if (slsConfig) {
    interceptSls(fetcher, slsConfig);
  }
  
  const callOpenApi = createApi(fetcher, ETypeApi.OPEN);
  const callInnerApi = createApi(fetcher, ETypeApi.INNER);
  const callContainerApi = createApi(fetcher, ETypeApi.CONTAINER);
  const callMultiOpenApi = createApi(fetcher, ETypeApi.OPEN_MULTI);
  
  return {
    ...(fetcher as unknown as Fetcher<C>),
    callOpenApi: createApiAutoMulti(callOpenApi, callMultiOpenApi),
    callInnerApi,
    callContainerApi,
    callMultiOpenApi
  };
};
