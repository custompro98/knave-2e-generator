# Knave 2e Generator

Digitized generators for the loads of tables in [Knave 2e](https://questingblog.com/knave-2e/) by [Ben Milton and Questing Beast LCC](https://questingbeast.substack.com/.

Knave 2e Generator is an independent production of custompro98 and is not affiliated with Questing Beast LLC.

## Usage

This library is provided as an ESM module, with no CommonJS or UMD builds.

It is documented using [JSDoc](https://jsdoc.app/) to provide type completion and documentation.

```js
import { rollOnTable } from 'knave-2e-generator';

const monster = rollOnTable('monsters');
const name = rollOnTable('names');

console.log(`A ${monster} named ${name} is here!`);
```
