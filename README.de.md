<!--
@license
Copyright (c) rljson

Use of this source code is governed by terms that can be
found in the LICENSE file in the root of this package.
-->

# @rljson/cars-master-runtime

[English](README.md) | Deutsch

[![CI](https://github.com/rljson/cars-master-runtime/actions/workflows/quick_check.yaml/badge.svg)](https://github.com/rljson/cars-master-runtime/actions/workflows/quick_check.yaml)
[![npm](https://img.shields.io/npm/v/@rljson/cars-master-runtime.svg)](https://www.npmjs.com/package/@rljson/cars-master-runtime)

Stammdaten-Runtime der cars-Beispiel-App.

## Motivation

- Die cars-App hält ihre Stammdaten in einer eigenen Domäne, getrennt von Anmeldung und Browser-API
- Die Runtime trägt die schweren Abhängigkeiten dieser Domäne; sie läuft auf dem Server, eingebunden ins Backend for Frontend
- Vorerst beweist sie das Einbinden mit einer Funktion, `hello()`

## Installation

```bash
pnpm add @rljson/cars-master-runtime
```

## Verwendung

```ts
import { hello } from '@rljson/cars-master-runtime';

console.log(hello());
```

Gibt aus:

```text
Hello from cars-master-runtime
```

## Grenzen

- Enthält noch keine Stammdaten, nur den Gruß

## Dokumentation

- Die Leitfäden in [doc/guides](doc/guides)

## Stand

Vor 1.0 — die API kann sich zwischen Minor-Versionen ändern.

## Mitwirken

Siehe [doc/guides/develop-guide.md](doc/guides/develop-guide.md).

## Lizenz

MIT — siehe [LICENSE](LICENSE).
