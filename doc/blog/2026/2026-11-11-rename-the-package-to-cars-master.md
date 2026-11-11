<!--
@license
Copyright (c) rljson

Use of this source code is governed by terms that can be
found in the LICENSE file in the root of this package.
-->

# Rename the package to cars-master

## Motivation

- The repo is called `cars-master`, the package was called
  `@rljson/cars-master-runtime`: one thing, two names
- The split into core and runtime packages the suffix stems from no
  longer exists, so the suffix says nothing any more

## Strategy

- Give package, files, exports and the started bundle the name of the
  repo: `cars-master`
- Rename everything current; leave the history as it was written
- Change no behaviour, so the tests prove the rename alone

## Implementation

- `package.json` names `@rljson/cars-master`, with homepage, issues and
  repository URL of the repo
- vite derives the bundle from the package name, so the build writes
  `dist/cars-master.js`; the Dockerfile starts that file
- `src/cars-master-runtime.ts` is `src/cars-master.ts` and exports
  `CarsMaster`; the version file `src/cars_master_version.ts` exports
  `carsMasterVersion`
- `start()` logs `cars-master listens on port …`, `hello()` answers
  `Hello from cars-master`; tests, golden, README, README.de and
  `index.jsonc` follow

## Result

- All tests pass with 100 % coverage, and the build writes
  `dist/cars-master.js`

## Open Points

- The server answers `/api/hello` and `/health` only; `@rljson/server`
  follows
