# tsup-cjs-esm

An example project that uses tsup to build a CommonJS and ESM version of a TypeScript project that works for Node>=10.

The package.json is setup as a commonjs module. This requires us to:

- Have the "main" field point to the CommonJS module for Node10 support
- Have the "exports" field point to the ES module in the "imports" configuration for Node16 support when imported from ESM.
- Have the "exports" field point to the CommonJS module in the "default" configuration for Node16 support when imported from CommonJS.

## Notes

You can also publish as a `"type": "module"` package, but this is not possible if you need to support Node<12.7.0. It will work for Node>=v12.7.0.
