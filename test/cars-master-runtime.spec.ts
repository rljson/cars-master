// @license
// Copyright (c) 2026 Rljson
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import { Server } from 'node:http';
import { AddressInfo } from 'node:net';
import { afterEach, describe, expect, it } from 'vitest';

import { CarsMasterRuntime, hello } from '../src/cars-master-runtime';

describe('CarsMasterRuntime', () => {
  let server: Server | undefined;

  afterEach(() => {
    server?.close();
    server = undefined;
  });

  const call = async (bff: CarsMasterRuntime, method: string, path: string) => {
    server = await bff.listen(0);
    const { port } = server.address() as AddressInfo;
    return fetch(`http://localhost:${port}${path}`, { method });
  };

  describe('hello()', () => {
    it('returns the greeting of cars-master-runtime', () => {
      expect(hello()).toBe('Hello from cars-master-runtime');
    });
  });

  describe('helloLines()', () => {
    it('holds its greeting', () => {
      expect(CarsMasterRuntime.example.helloLines()).toEqual([hello()]);
    });
  });

  describe('GET /api/hello', () => {
    it('answers the lines as json', async () => {
      const res = await call(CarsMasterRuntime.example, 'GET', '/api/hello?x=1');
      expect(res.status).toBe(200);
      expect(res.headers.get('content-type')).toBe('application/json');
      expect(await res.json()).toEqual({
        lines: [hello()],
      });
    });
  });

  describe('GET /health', () => {
    it('answers ok', async () => {
      const res = await call(new CarsMasterRuntime(), 'GET', '/health');
      expect(res.status).toBe(200);
      expect(await res.text()).toBe('ok');
    });
  });

  describe('other requests', () => {
    it('answer 404 for an unknown path', async () => {
      const res = await call(new CarsMasterRuntime(), 'GET', '/nope');
      expect(res.status).toBe(404);
    });

    it('answer 404 for another method', async () => {
      const res = await call(new CarsMasterRuntime(), 'POST', '/api/hello');
      expect(res.status).toBe(404);
    });
  });

  describe('handle()', () => {
    it('treats a request without url as /', () => {
      let status = 0;
      const res = {
        writeHead: (s: number) => (status = s),
        end: () => undefined,
      };
      new CarsMasterRuntime().handle(
        { method: 'GET' } as never,
        res as never,
      );
      expect(status).toBe(404);
    });
  });
});
