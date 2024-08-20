import { trapEffects } from "./trap-effects.mjs";
import { hazards } from "./hazards.mjs";
import { mechanisms } from "./mechanisms.mjs";
import { combinations, combinations3 } from "../utility/combinations.mjs";

export const traps = [
  ...combinations3(trapEffects, hazards, mechanisms),
  ...combinations(trapEffects, hazards),
  ...combinations(trapEffects, mechanisms),
  ...combinations(hazards, mechanisms),
];
