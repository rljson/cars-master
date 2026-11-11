# Changelog

## Unreleased

- Rename the package to `@rljson/cars-master`: `CarsMasterRuntime` is
  now `CarsMaster`, `carsMasterRuntimeVersion` is `carsMasterVersion`,
  and the build writes `dist/cars-master.js`, which the container starts
- Add `hello()`, the greeting of this package
- Add `CarsMasterRuntime`, an HTTP server with `GET /api/hello` and
  `GET /health`, and `start()`
- Add the Dockerfile of the container `cars-master`
- Keep the package private, off npm
