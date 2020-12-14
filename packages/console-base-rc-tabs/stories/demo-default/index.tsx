import _without from 'lodash/without';
import React, {
  useState,
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  Hr,
  Button,
  RadioGroup,
  LongArticle,
  Flex100HBF
} from '@alicloud/demo-rc-elements';

import Tabs, {
  TabProps
} from '../../src';

const ScDemo = styled.div`
  display: flex;
`;
const ScDemoL = styled.div`
  flex: 1;
`;
const ScDemoLR = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.33);
  width: 600px;
`;

const DEFAULT_PAGES: TabProps[] = [{
  title: '长文',
  content: <LongArticle />
}, {
  title: 'HBR 100%',
  content: <Flex100HBF />
}, {
  title: '标题很长长长长长长长长长长长长长长长长长长长长长长长长长长长',
  content: <>123123123</>
}];

function getWidth(w: string): number {
  switch (w) {
    case 'XS':
      return 240;
    case 'S':
      return 400;
    case 'L':
      return 800;
    default:
      return 600;
  }
}

function getHeight(h: string): number | string {
  switch (h) {
    case 'A':
      return 'auto';
    case 'XS':
      return 360;
    case 'S':
      return 600;
    case 'L':
      return 1200;
    default:
      return 800;
  }
}

export default function Demo(): JSX.Element {
  const [stateTabs, setStateTabs] = useState<TabProps[]>(DEFAULT_PAGES);
  const [stateWidth, setStateWidth] = useState<string>('M');
  const [stateHeight, setStateHeight] = useState<string>('M');
  const [stateActiveTab, setStateActiveTab] = useState<TabProps | undefined>(DEFAULT_PAGES[1]);
  const width = getWidth(stateWidth);
  const height = getHeight(stateHeight);
  
  const handleAdd = useCallback(() => {
    setStateTabs([...stateTabs, {
      title: new Date().toISOString(),
      content: <>{new Date().toString()}</>,
      closable: true
    }]);
  }, [stateTabs, setStateTabs]);
  
  const handleTabClose = useCallback((item: TabProps) => {
    setStateTabs(_without(stateTabs, item));
  }, [stateTabs, setStateTabs]);
  
  return <ScDemo>
    <ScDemoL>
      <Button onClick={handleAdd}>Add Tab</Button>
      <Hr />
      <RadioGroup {...{
        label: '容器宽度',
        items: [{
          label: 'smaller',
          value: 'XS'
        }, {
          label: 'small',
          value: 'S'
        }, {
          label: 'normal',
          value: 'M'
        }, {
          label: 'large',
          value: 'L'
        }],
        value: stateWidth,
        onChange: setStateWidth
      }} />
      <RadioGroup {...{
        label: '容器高度',
        items: [{
          label: 'smaller',
          value: 'XS'
        }, {
          label: 'small',
          value: 'S'
        }, {
          label: 'normal',
          value: 'M'
        }, {
          label: 'large',
          value: 'L'
        }, {
          label: '100%',
          value: '100%'
        }, {
          label: 'auto',
          value: 'A'
        }],
        value: stateHeight,
        onChange: setStateHeight
      }} />
    </ScDemoL>
    <ScDemoLR style={{
      width,
      height
    }}>
      <Tabs {...{
        tabs: stateTabs,
        width,
        activeTab: stateActiveTab,
        onTabActivate: setStateActiveTab,
        onTabClose: handleTabClose
      }} />
    </ScDemoLR>
  </ScDemo>;
}