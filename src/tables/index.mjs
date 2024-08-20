/** @typedef { 'activities' | 'animals' | 'animalBodies' | 'animalEars' | 'animalEyes' | 'animalForms' | 'animalHeads' | 'animalLimbs' | 'animalScents' | 'animalSkins' | 'animalTails' | 'animalTeeth' | 'animalVoices' | 'animalSkins' | 'archetypes' | 'assets' | 'bodyTextures' | 'books' | 'buildings' | 'cityEvents' | 'cityThemes' | 'clothing' | 'colors' | 'colorSkies' | 'delusions' | 'delveShifts' | 'disasters' | 'domains' | 'dungeons' | 'effects' | 'effectAuras' | 'effectBlasts' | 'effectBolts' | 'effectRays' | 'effectRains' | 'effectWalls' | 'elementalBloods' | 'elementalBodies' | 'elementalBreaths' | 'elementalControls' | 'elementalAuras' | 'elementalBlasts' | 'elementalBolts' | 'elementalRays' | 'elementalWalls'  | 'elementalForms' | 'elements' | 'elementFlows' | 'elementRains' | 'elementSkins' | 'fabrics' | 'factions' | 'factionAllies' | 'factionTraits' | 'factionWars' | 'fearsDomain' | 'fearsSymbol' | 'foodAddict' | 'foods' | 'foodRains' | 'foodTraits' | 'forms' | 'giantAnimals' | 'goals' | 'hazards' | 'ingredients' | 'inns' | 'itemTraits' | 'liabilities' | 'magicSchools' | 'mannerisms' | 'materials' | 'mechanisms' | 'miscellaneousItems' | 'missions' | 'monsters' | 'monsterAllies' | 'monsterSkins' | 'monsterTraits' | 'mutations' | 'names' | 'npcDetails' | 'organs' | 'personalities' | 'placeTraits' | 'potions' | 'powers' | 'professions' | 'qualities' | 'rewards' | 'rooms' | 'roomThemes' | 'scents' | 'skinColors' | 'skinTextures' | 'sounds' | 'structures' | 'surnames' | 'symbols' | 'tactics' | 'tastes' | 'tasteRains' | 'textures' | 'textureRains' | 'tools' | 'traps' | 'trapEffects' | 'travelShifts' | 'treasures' | 'weaknesses' | 'weapons' | 'weaponRains' | 'wizardNames' } TableName */

import { animals } from "./animals.mjs";
import { monsters } from "./monsters.mjs";
import { monsterTraits } from "./monster-traits.mjs";
import { rolldN } from "../utility/roll.mjs";
import { colors } from "./colors.mjs";
import { elements } from "./elements.mjs";
import { delusions } from "./delusions.mjs";
import { activities } from "./activities.mjs";
import { assets } from "./assets.mjs";
import { books } from "./books.mjs";
import { buildings } from "./buildings.mjs";
import { inns } from "./inns.mjs";
import { cityThemes } from "./city-themes.mjs";
import { cityEvents } from "./city-events.mjs";
import { clothing } from "./clothing.mjs";
import { disasters } from "./disasters.mjs";
import { domains } from "./domains.mjs";
import { dungeons } from "./dungeons.mjs";
import { effects } from "./effects.mjs";
import { fabrics } from "./fabrics.mjs";
import { factions } from "./factions.mjs";
import { symbols } from "./symbols.mjs";
import { foods } from "./foods.mjs";
import { forms } from "./forms.mjs";
import { foodTraits } from "./food-traits.mjs";
import { goals } from "./goals.mjs";
import { hazards } from "./hazards.mjs";
import { delveShifts } from "./delve-shifts.mjs";
import { liabilities } from "./liabilities.mjs";
import { magicSchools } from "./magic-schools.mjs";
import { mannerisms } from "./mannerisms.mjs";
import { archetypes } from "./archetypes.mjs";
import { materials } from "./materials.mjs";
import { mechanisms } from "./mechanisms.mjs";
import { miscellaneousItems } from "./miscellaneous-items.mjs";
import { ingredients } from "./ingredients.mjs";
import { missions } from "./missions.mjs";
import { mutations } from "./mutations.mjs";
import { textures } from "./textures.mjs";
import { names, surnames } from "./names.mjs";
import { npcDetails } from "./npc-details.mjs";
import { organs } from "./organs.mjs";
import { personalities } from "./personalities.mjs";
import { placeTraits } from "./place-traits.mjs";
import { potions } from "./potions.mjs";
import { elementalForms } from "./elemental-forms.mjs";
import { powers } from "./powers.mjs";
import { professions } from "./professions.mjs";
import { qualities } from "./qualities.mjs";
import { rooms } from "./rooms.mjs";
import { roomThemes } from "./room-themes.mjs";
import { itemTraits } from "./item-traits.mjs";
import { scents } from "./scents.mjs";
import { sounds } from "./sounds.mjs";
import { structures } from "./structures.mjs";
import { tactics } from "./tactics.mjs";
import { tastes } from "./tastes.mjs";
import { trapEffects } from "./trap-effects.mjs";
import { traps } from "./traps.mjs";
import { tools } from "./tools.mjs";
import { weapons } from "./weapons.mjs";
import { treasures } from "./treasures.mjs";
import { rewards } from "./rewards.mjs";
import { weaknesses } from "./weaknesses.mjs";
import { wizardNames } from "./wizard-names.mjs";
import { travelShifts } from "./travel-shifts.mjs";

/**
 * @type {Record<TableName, string[]>}
 */
const tables = {
  activities: activities,
  animalBodies: animals.map((animal) => `Body of ${animal.toLowerCase()}`),
  animalEars: animals.map((animal) => `Ears of ${animal.toLowerCase()}`),
  animalEyes: animals.map((animal) => `Eyes of ${animal.toLowerCase()}`),
  animalForms: animals.map((animal) => `Form of ${animal.toLowerCase()}`),
  animalHeads: animals.map((animal) => `Head of ${animal.toLowerCase()}`),
  animalLimbs: animals.map((animal) => `Limbs of ${animal.toLowerCase()}`),
  animalScents: animals.map((animal) => `Scent of ${animal.toLowerCase()}`),
  animalSkins: animals.map((animal) => `${animal} skin`),
  animalTails: animals.map((animal) => `Tail of ${animal.toLowerCase()}`),
  animalTeeth: animals.map((animal) => `Teeth of ${animal.toLowerCase()}`),
  animalVoices: animals.map((animal) => `Voice of ${animal.toLowerCase()}`),
  animals: animals,
  archetypes: archetypes,
  assets: assets,
  bodyTextures: textures.map((texture) => `${texture} body`),
  books: books,
  buildings: buildings,
  cityEvents: cityEvents,
  cityThemes: cityThemes,
  clothing: clothing,
  colorSkies: colors.map((color) => `Sky turns ${color}`),
  colors: colors,
  delusions: delusions,
  delveShifts: delveShifts,
  disasters: disasters,
  domains: domains,
  dungeons: dungeons,
  effectAuras: effects.map((effect) => `Aura of ${effect}`),
  effectBlasts: effects.map((effect) => `${effect} blast`),
  effectBolts: effects.map((effect) => `${effect} bolt`),
  effectRains: effects.map((effect) => `${effect} rain`),
  effectRays: effects.map((effect) => `${effect} ray`),
  effectWalls: effects.map((effect) => `Wall of ${effect}`),
  effects: effects,
  elementFlows: elements.map((element) => `${element} flow`),
  elementRains: elements.map((element) => `${element} rain`),
  elementSkins: elements,
  elementalAuras: elements.map((element) => `Aura of ${element}`),
  elementalBlasts: elements.map((element) => `${element} blast`),
  elementalBloods: elements.map((element) => `${element} blood`),
  elementalBodies: elements.map((element) => `${element} body`),
  elementalBolts: elements.map((element) => `${element} bolt`),
  elementalBreaths: elements.map((element) => `${element} breath`),
  elementalControls: elements.map((element) => `Control of ${element}`),
  elementalForms: elementalForms,
  elementalRays: elements.map((element) => `${element} ray`),
  elementalWalls: elements.map((element) => `Wall of ${element}`),
  elements: elements,
  fabrics: fabrics,
  factionAllies: factions.map((faction) => `Alliance with ${faction}`),
  factionTraits: factions,
  factionWars: factions.map((faction) => `${faction} at war`),
  factions: factions,
  fearsDomain: domains.map((domain) => `Fear of ${domain.toLowerCase()}`),
  fearsSymbol: symbols.map((symbol) => `Fear of ${symbol.toLowerCase()}`),
  foodAddict: foods.map((food) => `Addicted to ${food.toLowerCase()}`),
  foodRains: foods.map((food) => `Raining ${food}`),
  foodTraits: foodTraits,
  foods: foods,
  forms: forms,
  giantAnimals: animals.map((animal) => `Giant ${animal.toLowerCase()}`),
  goals: goals,
  hazards: hazards,
  ingredients: ingredients,
  inns: inns,
  itemTraits: itemTraits,
  liabilities: liabilities,
  magicSchools: magicSchools,
  mannerisms: mannerisms,
  materials: materials,
  mechanisms: mechanisms,
  miscellaneousItems: miscellaneousItems,
  missions: missions,
  monsterAllies: monsters.map((monster) => `Alliance with ${monster}`),
  monsterSkins: monsters.map((monster) => `${monster} skin`),
  monsterTraits: monsterTraits,
  monsters: monsters,
  mutations: mutations,
  names: names,
  npcDetails: npcDetails,
  organs: organs,
  personalities: personalities,
  placeTraits: placeTraits,
  potions: potions.map((potion) => `Potion of ${potion}`),
  powers: powers,
  professions: professions,
  qualities: qualities,
  rewards: rewards,
  roomThemes: roomThemes,
  rooms: rooms,
  scents: scents,
  skinColors: colors.map((color) => `${color} skin`),
  skinTextures: textures.map((texture) => `${texture} skin`),
  sounds: sounds,
  structures: structures,
  surnames: surnames,
  symbols: symbols,
  tactics: tactics,
  tasteRains: tastes.map((taste) => `Rain of ${taste}`),
  tastes: tastes,
  textureRains: textures.map((texture) => `${texture} rain`),
  textures: textures,
  tools: tools,
  trapEffects: trapEffects,
  traps: traps,
  travelShifts: travelShifts,
  treasures: treasures,
  weaknesses: weaknesses,
  weaponRains: weapons.map((weapon) => `${weapon} rain`),
  weapons: weapons,
  wizardNames: wizardNames,
};

/**
 * Rolls a random number from 1 to 100 and returns the corresponding value from the table,
 * recursively rolling from a table if the value starts with "table_".
 *
 * @param {TableName} table The name of the table to roll from.
 * @returns {string} The value from the table.
 */
export function rollOnTable(table) {
  const output = tables[table][rolldN(tables[table].length)];

  if (output.startsWith("table_")) {
    const nextTable = output.replace("table_", "");

    console.log("Rolling from", table, "to", nextTable);

    if (!tables[nextTable]) {
      console.error("No table found for", table);
      return output;
    }

    return rollOnTable(/** @type TableName*/ (nextTable));
  } else {
    return output;
  }
}
