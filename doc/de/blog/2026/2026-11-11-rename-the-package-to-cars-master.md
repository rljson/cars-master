<!--
@license
Copyright (c) rljson

Use of this source code is governed by terms that can be
found in the LICENSE file in the root of this package.
-->

# Das Package heißt jetzt cars-master

## Motivation

- Das Repo heißt `cars-master`, das Package hieß
  `@rljson/cars-master-runtime`: eine Sache, zwei Namen
- Die Trennung in Core- und Runtime-Packages, aus der die Endung stammt,
  gibt es nicht mehr, also sagt die Endung nichts mehr

## Strategie

- Package, Dateien, Exporte und das gestartete Bundle bekommen den Namen
  des Repos: `cars-master`
- Alles Aktuelle wird umbenannt; die Historie bleibt, wie sie geschrieben
  wurde
- Kein Verhalten ändert sich, so beweisen die Tests allein die Umbenennung

## Umsetzung

- `package.json` nennt `@rljson/cars-master`, mit Homepage, Issues und
  Repository-URL des Repos
- vite leitet das Bundle aus dem Package-Namen ab, also schreibt der Build
  `dist/cars-master.js`; das Dockerfile startet diese Datei
- `src/cars-master-runtime.ts` ist jetzt `src/cars-master.ts` und
  exportiert `CarsMaster`; die Versionsdatei `src/cars_master_version.ts`
  exportiert `carsMasterVersion`
- `start()` meldet `cars-master listens on port …`, `hello()` antwortet
  `Hello from cars-master`; Tests, Golden, README, README.de und
  `index.jsonc` folgen

## Ergebnis

- Alle Tests laufen mit 100 % Abdeckung, und der Build schreibt
  `dist/cars-master.js`

## Offene Punkte

- Der Server beantwortet nur `/api/hello` und `/health`;
  `@rljson/server` folgt
