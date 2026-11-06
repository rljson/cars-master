<!--
@license
Copyright (c) rljson

Use of this source code is governed by terms that can be
found in the LICENSE file in the root of this package.
-->

# @rljson/cars-master-runtime

English | [Deutsch](README.de.md)

[![CI](https://github.com/rljson/cars-master-runtime/actions/workflows/quick_check.yaml/badge.svg)](https://github.com/rljson/cars-master-runtime/actions/workflows/quick_check.yaml)
[![npm](https://img.shields.io/npm/v/@rljson/cars-master-runtime.svg)](https://www.npmjs.com/package/@rljson/cars-master-runtime)

Master data runtime of the cars example app.

## Motivation

- The cars app keeps its master data in its own domain, apart from sign-in and the browser API
- The runtime holds the heavy dependencies of that domain; it runs on the server, linked into the backend for frontend
- For now it proves the linking with one function, `hello()`

## Installation

```bash
pnpm add @rljson/cars-master-runtime
```

## Usage

```ts
import { hello } from '@rljson/cars-master-runtime';

console.log(hello());
```

It prints:

```text
Hello from cars-master-runtime
```

## Limitations

- Holds no master data yet, only the greeting

## Documentation

- The guides in [doc/guides](doc/guides)

## Status

Before 1.0 — the API may change between minor versions.

## Contributing

See [doc/guides/develop-guide.md](doc/guides/develop-guide.md).

## License

MIT — see [LICENSE](LICENSE).
