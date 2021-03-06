@alicloud/fetcher-fetch
===

> `@alicloud/fetcher` 的底层 [fetch]，可以单独使用。几乎原生的 `fetch`，除了：
> 1. 添加 timeout（原生 [fetch] 不支持超时）
> 2. 没有 fetch 的情况下使用 [unfetch]，它非常轻量，不做全局性 polyfill，应用有需要的话，可以自行引入 [whatwg-fetch]

# INSTALL

```
tnpm i @alicloud/fetcher-fetch -S
```

# API

```typescript
import fetch, {
  EFetchError,
  FetchOptions
} from '@alicloud/fetcher-fetch';

fetch(url, {
  timeout: 20000, // 超时毫秒数，默认无，保持跟原生一致
  method,
  ...
}).then(response => response.json());
```

[fetch]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
[unfetch]: https://github.com/developit/unfetch
[whatwg-fetch]: https://github.com/github/fetch
