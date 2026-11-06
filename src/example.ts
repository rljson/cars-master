// @license
// Copyright (c) 2026 Rljson
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import { hello } from './cars-master-runtime.ts';

export const example = () => {
  const l = console.log;

  l('hello()');
  l(`  ${hello()}`);
};

/*
// Run via "npx vite-node src/example.ts"
example();
*/
