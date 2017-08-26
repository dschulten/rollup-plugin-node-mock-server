## Rollup Plugin to run node-mock-server
Rollup plugin to start [node-mock-server](https://github.com/smollweide/node-mock-server) in a rollup project.

The node-mock-server serves the static resources of your project and features a file-based api mock. The api mock can use plain files as responses, but it can also generate templated responses which take parameters and can evaluate custom functions to build the output. A middleware hook allows to define even more dynamic responses.

The server comes with a UI where developers can conveniently edit resources and choose which success or error response the API should return at runtime.

You can also import your mock api from a https://swagger.io/specification/[Swagger (OpenAPI)] specification.

## Readme

Please see the [project homepage](https://github.com/dschulten/rollup-plugin-node-mock-server) for the README.

It is written in [AsciiDoc](http://www.methods.co.nz/asciidoc/) but npmjs.com [doesn't support AsciiDoc yet](https://github.com/npm/www/issues/42).

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
