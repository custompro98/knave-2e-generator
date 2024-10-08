import { combinations } from "../utility/combinations.mjs";

const femaleNames = [
  "Adelaide",
  "Ingrid",
  "Agnes",
  "Ione",
  "Alma",
  "Iris",
  "Anastasia",
  "Isabetta",
  "Anika",
  "Isolde",
  "Annora",
  "Jacquette",
  "Astrid",
  "Jeanne",
  "Barsaba",
  "Jessamine",
  "Beatrix",
  "Jilly",
  "Bethel",
  "Lavinia",
  "Bianca",
  "Lisbet",
  "Blanche",
  "Madelena",
  "Bodil",
  "Margot",
  "Bridget",
  "Marian",
  "Brunhilde",
  "Marigold",
  "Calypso",
  "Matilda",
  "Catalina",
  "Melisande",
  "Cecilia",
  "Millicent",
  "Celeste",
  "Minerva",
  "Charlotte",
  "Morgan",
  "Cleopha",
  "Nerissa",
  "Clotilde",
  "Odette",
  "Clover",
  "Olga",
  "Colette",
  "Olivia",
  "Constance",
  "Orchid",
  "Damaris",
  "Pepper",
  "Daphne",
  "Petra",
  "Demona",
  "Philomena",
  "Desirae",
  "Phoebe",
  "Ella",
  "Piety",
  "Elsbeth",
  "Poppy",
  "Esme",
  "Portia",
  "Eulalia",
  "Rosalind",
  "Euphemia",
  "Rose",
  "Eydis",
  "Sabina",
  "Fern",
  "Sif",
  "Fiora",
  "Sigourney",
  "Fleur",
  "Sigrid",
  "Florence",
  "Silence",
  "Francesca",
  "Sybil",
  "Gertrude",
  "Tabitha",
  "Giselle",
  "Trillby",
  "Godiva",
  "Ulfhild",
  "Guinevere",
  "Ursula",
  "Heloise",
  "Vivian",
  "Henrietta",
  "Wendy",
  "Hester",
  "Willow",
  "Hippolyta",
  "Winifred",
  "Honora",
  "Yvette",
  "Imogene",
  "Zora",
];

const maleNames = [
  "Alaric",
  "Aldous",
  "Alton",
  "Archibald",
  "Arne",
  "Arthur",
  "Balthazar",
  "Bard",
  "Bartholomew",
  "Bartlett",
  "Basil",
  "Baxton",
  "Benedict",
  "Bennett",
  "Beorn",
  "Bertram",
  "Burchard",
  "Cadman",
  "Caspian",
  "Chadwick",
  "Clovis",
  "Conrad",
  "Corbett",
  "Crispin",
  "Cyprian",
  "Cyrus",
  "Daegal",
  "Denis",
  "Destrian",
  "Drogo",
  "Eldon",
  "Ellis",
  "Elric",
  "Emil",
  "Erasmus",
  "Faustus",
  "Felix",
  "Finn",
  "Finnian",
  "Fitzhugh",
  "Florian",
  "Fox",
  "Galileo",
  "Giles",
  "Godfrey",
  "Godwin",
  "Grimwald",
  "Hamlin",
  "Hannibal",
  "Hildebrand",
  "Jasper",
  "Jeremiah",
  "Johan",
  "Jules",
  "Kenric",
  "Leif",
  "Leopold",
  "Leoric",
  "Lothar",
  "Lucian",
  "Merrick",
  "Milo",
  "Mordred",
  "Mortimer",
  "Neville",
  "Odel",
  "Ogden",
  "Orion",
  "Orvyn",
  "Osric",
  "Oswald",
  "Paschal",
  "Percival",
  "Peregrine",
  "Piers",
  "Quentin",
  "Randolf",
  "Redmaine",
  "Reinhold",
  "Rex",
  "Ricard",
  "Roland",
  "Rufus",
  "Silas",
  "Stilton",
  "Stratford",
  "Sylvio",
  "Tenpiece",
  "Thaddeus",
  "Torsten",
  "Tristan",
  "Urban",
  "Valentin",
  "Valerian",
  "Virgil",
  "Warrick",
  "Waverly",
  "Webster",
  "Wilkin",
  "Wymond",
];

const surnamePartOne = [
  "Adder",
  "Apple",
  "Ash",
  "Bab",
  "Bag",
  "Bar",
  "Barrow",
  "Basker",
  "Beau",
  "Beetle",
  "Berry",
  "Bird",
  "Brandy",
  "Bright",
  "Brindle",
  "Bull",
  "Bux",
  "Caven",
  "Chelten",
  "Chester",
  "Chuff",
  "Chum",
  "Clod",
  "Cobble",
  "Cotten",
  "Cress",
  "Crom",
  "Cumber",
  "Dela",
  "Dig",
  "Draw",
  "Dreg",
  "Drol",
  "Dun",
  "Even",
  "Ever",
  "Fair",
  "Fallow",
  "Farthing",
  "Feather",
  "Ferns",
  "Fox",
  "Gam",
  "Gird",
  "Gos",
  "Grey",
  "Grim",
  "Half",
  "Hard",
  "Harrow",
  "Hart",
  "Haver",
  "Hedge",
  "Hither",
  "Holly",
  "Honey",
  "Horn",
  "Kettle",
  "Kings",
  "Little",
  "Long",
  "Love",
  "Middle",
  "Mug",
  "Nether",
  "Never",
  "Obling",
  "Pember",
  "Penning",
  "Pens",
  "Pinker",
  "Porten",
  "Quill",
  "Rath",
  "Sack",
  "Sallow",
  "Salt",
  "Scor",
  "Sedge",
  "Silver",
  "Slither",
  "Smit",
  "Snod",
  "Souther",
  "Stew",
  "Stir",
  "Swine",
  "Tar",
  "Temple",
  "Tide",
  "Tread",
  "Under",
  "Vander",
  "Weather",
  "Wester",
  "Wex",
  "Whit",
  "Wither",
  "Withing",
  "Wy",
];

const surnamePartTwo = [
  "bald",
  "barrow",
  "batch",
  "beck",
  "blood",
  "bold",
  "bone",
  "bottle",
  "bottom",
  "bridge",
  "buck",
  "burn",
  "bury",
  "by",
  "caster",
  "castle",
  "chester",
  "child",
  "church",
  "cliff",
  "cloth",
  "coat",
  "combe",
  "cott",
  "dale",
  "dish",
  "ditch",
  "down",
  "fax",
  "feld",
  "fent",
  "fer",
  "field",
  "foot",
  "force",
  "fort",
  "fry",
  "gale",
  "grass",
  "grave",
  "green",
  "grove",
  "ham",
  "hill",
  "hope",
  "lack",
  "lain",
  "land",
  "less",
  "lin",
  "ling",
  "lish",
  "lock",
  "long",
  "low",
  "ly",
  "man",
  "march",
  "mark",
  "marl",
  "marsh",
  "mass",
  "meer",
  "mond",
  "mont",
  "mor",
  "morn",
  "nick",
  "ny",
  "port",
  "ridge",
  "row",
  "sea",
  "set",
  "shot",
  "sop",
  "spoon",
  "staff",
  "stoke",
  "stone",
  "ten",
  "thorn",
  "thorpe",
  "throp",
  "ton",
  "tooth",
  "top",
  "vane",
  "ville",
  "wald",
  "wark",
  "watch",
  "water",
  "well",
  "whistle",
  "wick",
  "wood",
  "worm",
  "worth",
  "worthy",
];

export const surnames = combinations(surnamePartOne, surnamePartTwo, {
  shouldInsertSpace: false,
});
export const names = combinations([...maleNames, ...femaleNames], surnames);
