import {
  useCallback
} from 'react';

import {
  WIDTH_SCROLLER_BUTTON
} from '../../const';

import useProps from './use-props';
import useRefTabs from './use-ref-tabs';
import useRefNav from './use-ref-nav';
import useActiveTab from './use-active-tab';
import useDispatchUpdateNavOffset from './use-dispatch-update-nav-offset';
import useDispatchUpdateNavOffsetMax from './use-dispatch-update-nav-offset-max';

/**
 * tabs/activeTab 等变化后调整 nav 节点的宽度以决定是否展示按钮【<】【>】
 */
export default function useHandleAdjustNavWidth(): () => void {
  const {
    tabs,
    width
  } = useProps();
  const refTabs = useRefTabs();
  const refNav = useRefNav();
  const activeTab = useActiveTab();
  const dispatchUpdateNavOffset = useDispatchUpdateNavOffset();
  const dispatchUpdateNavOffsetMax = useDispatchUpdateNavOffsetMax();
  
  return useCallback(() => {
    const widthOfTabs = width > 0 ? width : refTabs.current!.offsetWidth; // 容器有 transition 的情况下，width 变化不会立马影响 tabs 的实际宽度
    const widthOfNav = refNav.current!.offsetWidth;
    
    const activeIndex = tabs.indexOf(activeTab);
    let activeOffset = 0;
    
    for (let i = 0; i < activeIndex; i++) {
      activeOffset -= (refNav.current!.children[i] as HTMLElement).offsetWidth;
    }
    
    dispatchUpdateNavOffsetMax(Math.min(widthOfTabs - widthOfNav - WIDTH_SCROLLER_BUTTON * 2, 0));
    dispatchUpdateNavOffset(activeOffset);
  }, [width, tabs, activeTab, refTabs, refNav, dispatchUpdateNavOffset, dispatchUpdateNavOffsetMax]);
}
