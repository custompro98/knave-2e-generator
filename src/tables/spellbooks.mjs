// import {
//   combinations,
//   combinations3,
//   combinations4,
// } from "../utility/combinations.mjs";
// import { effects } from "./effects.mjs";
// import { elements } from "./elements.mjs";
// import { forms } from "./forms.mjs";
// import { qualities } from "./qualities.mjs";
// import { wizardNames } from "./wizard-names.mjs";

const existingSpellbooks = [
  "Adhere",
  "Animal Friendship",
  "Animate Object",
  "Anthropomorphize",
  "Arcane Eye",
  "Astral Prison",
  "Attract",
  "Auditory Illusion",
  "Babble",
  "Beast Form",
  "Befuddle",
  "Bend Fate",
  "Body Swap",
  "Catherine",
  "Charm",
  "Command",
  "Comprehend",
  "Control Plants",
  "Control Weather",
  "Detect Magic",
  "Disassemble",
  "Disguise",
  "Displace",
  "Duplicate",
  "Earthquake",
  "Elasticity",
  "Elemental Wall",
  "Filch",
  "Fog Cloud",
  "Gravity Shift",
  "Greed",
  "Haste",
  "Hatred",
  "Hear Whispers",
  "Hover",
  "Hypnotize",
  "Icy Touch",
  "Increase Gravity",
  "Invisible Tether",
  "Knock",
  "Leap",
  "Liquid Air",
  "Lock",
  "Magic Suppressor",
  "Manse",
  "Marble Madness",
  "Masquerade",
  "Miniaturize",
  "Mirror Image",
  "Mirrorwalk",
  "Multiarm",
  "Night Sphere",
  "Objectify",
  "Ooze Form",
  "Pacify",
  "Phantom Coach",
  "Phobia",
  "Pit",
  "Primeval Surge",
  "Psychometry",
  "Pull",
  "Push",
  "Raise Dead",
  "Read Mind",
  "Repel",
  "Scry",
  "Sculpt Elements",
  "Shroud",
  "Shuffle",
  "Silence",
  "Sleep",
  "Smoke Form",
  "Snail Knight",
  "Sniff",
  "Sort",
  "Speak with Dead",
  "Spectacle",
  "Spellseize",
  "Spider Climb",
  "Summon Cube",
  "Summon Idol",
  "Swarm",
  "Telekinesis",
  "Telepathy",
  "Teleport",
  "Thaumaturgic Anchor",
  "Thicket",
  "Time Jump",
  "Time Rush",
  "Time Slow",
  "Truth Sense",
  "Unravel",
  "Upwell",
  "Vision",
  "Visual Illusion",
  "Ward",
  "Web",
  "Whirlwind",
  "Wizard Mark",
  "X-ray Vision",
];

// const elementFormSpells = combinations(elements, forms);
// const effectFormSpells = combinations(effects, forms);
// const effectElementSpells = combinations(effects, elements);
// const qualityElementFormSpells = combinations3(qualities, elements, forms).map(
//   (combo) => `The ${combo}`,
// );
// const qualityEffectFormSpells = combinations3(qualities, effects, forms).map(
//   (combo) => `The ${combo}`,
// );
// const wizardNameElementFormSpells = combinations3(
//   wizardNames.map((name) => `${name}'s`),
//   elements,
//   forms,
// );
// const wizardNameEffectFormSpells = combinations3(
//   wizardNames.map((name) => `${name}'s`),
//   effects,
//   forms,
// );
// const wizardNameEffectElementSpells = combinations3(
//   wizardNames.map((name) => `${name}'s`),
//   effects,
//   elements,
// );
// const wizardNameQualityElementFormSpells = combinations4(
//   wizardNames.map((name) => `${name}'s`),
//   qualities,
//   elements,
//   forms,
// );
// const wizardNameQualityEffectFormSpells = combinations4(
//   wizardNames.map((name) => `${name}'s`),
//   qualities,
//   effects,
//   forms,
// );
// const wizardNameQualityEffectElementSpells = combinations4(
//   wizardNames.map((name) => `${name}'s`),
//   qualities,
//   effects,
//   elements,
// );

export const spellbooks = [...existingSpellbooks];
