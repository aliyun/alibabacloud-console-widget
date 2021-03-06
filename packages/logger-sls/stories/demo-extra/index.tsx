import React, {
  useEffect
} from 'react';

import {
  P,
  Button
} from '@alicloud/demo-rc-elements';

import sls from '../_sls';

function testSlsOnLoad(): void {
  sls('@alicloud/logger-sls/on-load');
}

function testSlsInstant(): void {
  sls('@alicloud/logger-sls/instant', {
    type: 'instant',
    hello: 'world'
  }, {
    instant: true
  });
}

function testSlsDelay(): void {
  sls('@alicloud/logger-sls/instant', {
    type: 'instant',
    hello: 'world'
  }, {
    delay: 1234
  });
}

function testSlsOnce(): void {
  sls('@alicloud/logger-sls/once', undefined, {
    once: true
  });
}

function testSlsOnceCustom(): void {
  sls('@alicloud/logger-sls/once-custom', undefined, {
    once: 'hello'
  });
}

function testSlsOnceCustom2(): void {
  sls('@alicloud/logger-sls/once-custom2', undefined, {
    once: 'hello'
  });
}

function testSlsSampling(): void {
  sls('@alicloud/logger-sls/sampling', undefined, {
    sampling: 0.1
  });
}

function testSlsComplexData(): void {
  sls('@alicloud/logger-sls/sampling', {
    a: {
      b: true,
      c: {
        hello: 'string',
        arr: [1, 2, {
          value: 3
        }]
      }
    }
  });
}

export default function DemoExtra(): JSX.Element {
  useEffect(() => {
    testSlsOnLoad(); // 会延时发送
    testSlsInstant(); // 立即发送
  }, []);
  
  return <>
    <P>看 Console</P>
    <Button onClick={testSlsInstant}>instant</Button>
    <Button onClick={testSlsDelay}>delay</Button>
    <Button onClick={testSlsOnce}>once</Button>
    <Button onClick={testSlsOnceCustom}>onceCustom</Button>
    <Button onClick={testSlsOnceCustom2}>onceCustom2</Button>
    <Button onClick={testSlsSampling}>sampling</Button>
    <Button onClick={testSlsComplexData}>complexData</Button>
  </>;
}
