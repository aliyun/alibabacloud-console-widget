import {
  EMessageBroadcastByApp
} from '../../../const';
import broadcastByApp from '../../../util/broadcast-by-app';

/**
 * 动态设置各个地域下的资源数
 */
export default function setRegionResourceCount(payload: Record<string, number>): void {
  broadcastByApp<Record<string, number>>(EMessageBroadcastByApp.REGION_SET_RESOURCE_COUNT, payload);
}
