<!--
@license
Copyright (c) rljson

Use of this source code is governed by terms that can be
found in the LICENSE file in the root of this package.
-->

# Das erste Paket: `hello()`

## Motivation

- Die cars-Beispiel-App hält ihre Stammdaten in einer eigenen Domäne,
  getrennt von Anmeldung und Browser-API
- Dieses Repo ist die Runtime dieser Domäne: der Code, der auf dem Server
  läuft und schwere Abhängigkeiten tragen darf
- Bevor es Stammdaten gibt, muss das Repo zeigen, dass es sich bauen,
  testen, releasen und als Paket nutzen lässt
- Sein erstes Release bietet deshalb eine Funktion: `hello()`

## Strategie

- Das Repo so aufsetzen wie jedes rljson-Repo: die rljson-DNA für
  Leitfäden und Skills, die TypeScript-Werkzeuge für Build und Tests
- Das erste Feature winzig halten, damit der Aufbau geprüft wird
- Es privat halten, nicht auf npm: andere Pakete hängen von einer
  getaggten Version seines Git-Repos statt von einem lokalen Ordner ab

## Umsetzung: der Aufbau

- `gg dna init` und `gg dna add @rljson/dna-rljson` brachten die
  Leitfäden, die Skills für Claude und die GitHub-Prüfungen
- vite baut das Paket, vitest testet es mit 100 % Abdeckung, eslint prüft
  den Code und sein JSDoc
- `package.json` zeigt auf `dist/cars-master-runtime.js`; der Build liefert
  auch `src/example.ts` und die READMEs aus
- `index.jsonc` beschreibt das Repo für die Agenten, die Repos auswählen

## Umsetzung: `hello()`

- `hello()` gibt `Hello from cars-master-runtime` zurück
- `src/example.ts` gibt es aus; eine Golden-Datei in `test/goldens` hält
  die Ausgabe stabil
- Das README zeigt dasselbe Snippet auf Englisch und Deutsch

## Offene Punkte

- Das Repo enthält noch keine Stammdaten; die nächsten Schritte ersetzen
  den Gruß durch die echte Domäne
