// @license
// Copyright (c) 2026 Rljson
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import { describe, expect, it } from 'vitest';

import { hello } from '../src/cars-master-runtime';

describe('hello()', () => {
  it('returns the greeting of cars-master-runtime', () => {
    expect(hello()).toBe('Hello from cars-master-runtime');
  });
});
