import {
  Fetcher
} from '@alicloud/fetcher';

import {
  IInterceptorArmsConfig
} from '../types';

import createInterceptorResponseFulfilled from './create-interceptor-response-fulfilled';
import createInterceptorResponseRejected from './create-interceptor-response-rejected';

/**
 * 为 fetcher 增加 arms 埋点
 */
export default function intercept(fetcher: Fetcher, interceptorConfig?: IInterceptorArmsConfig): () => void {
  const interceptorFulfilled = createInterceptorResponseFulfilled(interceptorConfig);
  const interceptorRejected = createInterceptorResponseRejected(interceptorConfig);
  
  return fetcher.interceptResponse(interceptorFulfilled, interceptorRejected);
}