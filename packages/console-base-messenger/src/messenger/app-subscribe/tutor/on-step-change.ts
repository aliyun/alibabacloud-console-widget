import {
  IPayloadTutorStepChange
} from '../../../types';
import {
  EMessageBroadcastByConsoleBase
} from '../../../const';
import subscribeByApp from '../../../util/subscribe-by-app';

export default function onTutorStepChange(fn: (id: string, to: number, from: number) => void): () => void {
  return subscribeByApp<IPayloadTutorStepChange>(EMessageBroadcastByConsoleBase.TUTOR_STEP_CHANGE, payload => {
    if (!payload) {
      return;
    }
    
    fn(payload.id, payload.to, payload.from);
  });
}
