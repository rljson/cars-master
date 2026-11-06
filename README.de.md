<!--
@license
Copyright (c) rljson

Use of this source code is governed by terms that can be
found in the LICENSE file in the root of this package.
-->

# @rljson/cars-master-runtime

[English](README.md) | Deutsch

[![CI](https://github.com/rljson/cars-master-runtime/actions/workflows/quick_check.yaml/badge.svg)](https://github.com/rljson/cars-master-runtime/actions/workflows/quick_check.yaml)

Stammdaten-Runtime der cars-Beispiel-App.

## Motivation

- Die cars-App hält ihre Stammdaten in einer eigenen Domäne, getrennt von Anmeldung und Browser-API
- Die Runtime trägt die schweren Abhängigkeiten dieser Domäne; sie läuft als eigener Server, der Container `cars-master`
- Andere Dienste erreichen sie nur über HTTP
- Vorerst beantwortet sie das Hello World: `GET /api/hello` und `GET /health`

## Installation

Das Paket ist privat und wird nicht auf npm veröffentlicht. Abhängig
macht man sich von einer getaggten Version seines Git-Repos:

```bash
pnpm add git+ssh://git@github.com/rljson/cars-master-runtime.git#semver:^0.0.1
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

Den Server starten:

```ts
import { start } from '@rljson/cars-master-runtime';

await start({ PORT: '3000' });
```

`GET /api/hello` antwortet dann `{"lines":["Hello from cars-master-runtime"]}`.

## Container

Den Container `cars-master` in der Registry bauen:

```bash
az acr build --registry crcarsdemo --image cars-master:<version>-<sha> .
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
