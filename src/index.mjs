export { rollOnTable } from "./tables/index.mjs";

import { rollOnTable } from "./tables/index.mjs";
for (let i = 0; i < 1_000_000; i++) {
  console.log(rollOnTable("spellbooks"));
}
