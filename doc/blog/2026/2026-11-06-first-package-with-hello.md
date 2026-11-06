<!--
@license
Copyright (c) rljson

Use of this source code is governed by terms that can be
found in the LICENSE file in the root of this package.
-->

# The first package: `hello()`

## Motivation

- The cars example app keeps its master data in a domain of its own,
  apart from sign-in and the browser API
- This repo is the runtime of that domain: the code that runs on the
  server and may carry heavy dependencies
- Before any master data exists, the repo has to prove that it can be
  built, tested, published and used as a package
- So its first release offers one function: `hello()`

## Strategy

- Set the repo up the way every rljson repo is set up: the rljson DNA
  for guides and skills, the TypeScript toolchain for build and tests
- Keep the first feature tiny, so the setup is what gets tested
- Publish it to npm as `@rljson/cars-master-runtime`, so other packages
  can depend on a version instead of a local folder

## Implementation: the setup

- `gg dna init` and `gg dna add @rljson/dna-rljson` brought the guides,
  the skills for Claude and the GitHub checks
- vite builds the package, vitest tests it with 100 % coverage, eslint
  checks the code and its JSDoc
- `package.json` points to `dist/cars-master-runtime.js`; the build also
  ships `src/example.ts` and the READMEs
- `index.jsonc` describes the repo for the agents that choose repos

## Implementation: `hello()`

- `hello()` returns `Hello from cars-master-runtime`
- `src/example.ts` prints it; a golden file in `test/goldens` keeps the
  output stable
- The README shows the same snippet in English and German

## Open Points

- The repo holds no master data yet; the next steps replace the greeting
  with the real domain
