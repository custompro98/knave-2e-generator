import { rollOnTable } from "./tables/index.mjs";

function main() {
  console.log("Rolling a monster...", rollOnTable("monsters"));
  console.log("Rolling a name...", rollOnTable("names"));
  console.log("Rolling an elemental form...", rollOnTable("elementalForms"));
}

main();
