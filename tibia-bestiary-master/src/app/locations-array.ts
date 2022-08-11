import { ParseLocation } from "@angular/compiler";
import { Locations } from "./locations"



///methods
export function searchForLocation(name: string): Locations
{
  const index = locationsArray.findIndex((value) =>
  {
    const newValueName = value.name.trim().toLowerCase();
    const newName = name.trim().toLowerCase();
    return newValueName === newName;
  })
  return locationsArray[index];
}

///array

export const locationsArrayDraft: Locations[] = [];

const mainland = locationsArrayDraft[0] =
{
  name: 'Mainland',
  parentLocation: 'Tibia Universe',
  path: null, //wip
  structuralDepth: 1,
};

const mainContinent = locationsArrayDraft[1] =
{
  name: 'Main Continent',
  parentLocation: mainland,
  path: null,
  structuralDepth: 2,
}

const shatteredIsles = locationsArrayDraft[1] =
{
  name: 'Shattered Isles',
  parentLocation: mainland,
  path: null, //wip
  structuralDepth: 2,
};

const lagunaIslands = locationsArrayDraft[2] =
{
  name: 'Laguna Islands',
  parentLocation: shatteredIsles,
  path: null, //wip
  structuralDepth: 3,
};

const vandura = locationsArrayDraft[3] =
{
  name: 'Vandura',
  parentLocation: shatteredIsles,
  path: null,
  structuralDepth: 3,
}

const libertyBay = locationsArrayDraft[3] =
{
  name: 'Liberty Bay',
  parentLocation: vandura,
  path: null, //wip
  structuralDepth: 4,
};

const darama = locationsArrayDraft[3] =
{
  name: 'Darama',
  parentLocation: mainContinent,
  path: null, //wip
  structuralDepth: 2,
}

const yalahar = locationsArrayDraft[4] =
{
  name: 'Yalahar',
  parentLocation: mainland,
  path: null, //wip
  structuralDepth: 2,
};

const portHope = locationsArrayDraft[5] =
{
  name: 'Port Hope',
  parentLocation: darama,
  path: null, //wip
  structuralDepth: 3,
};

const tiquanda = locationsArrayDraft[6] =
{
  name: 'Tiquanda',
  parentLocation: darama,
  path: null, //wip
  structuralDepth: 3,
};

const arenaQuarter = locationsArrayDraft[7] =
{
  name: 'Arena Quarter',
  parentLocation: yalahar,
  path: null, //wip
  structuralDepth: 3,
};

const tiquandaTarantulaCaves = locationsArrayDraft[8] =
{
  name: 'Tiquanda Tarantula Caves',
  parentLocation: tiquanda,
  path: null, //wip
  structuralDepth: 4,
};

const venore = locationsArrayDraft[9] =
{
  name: 'Venore',
  parentLocation: mainContinent,
  path: null, //wip
  structuralDepth: 3,
};

const zao = locationsArrayDraft[11] =
{
  name: 'Zao',
  parentLocation: mainland,
  path: null, //wip
  structuralDepth: 2,
};

const muggyPlains = locationsArrayDraft[11] =
{
  name: 'Muggy Plains',
  parentLocation: zao,
  path: null,
  structuralDepth: 3,
}
const northernZaoPlantations = locationsArrayDraft[12] =
{
  name: 'Northern Zao Plantations',
  parentLocation: muggyPlains,
  path: null, //wip
  structuralDepth: 4,
};

const brimstoneBugCaves = locationsArrayDraft[12] =
{
  name: 'Brimstone Bug Caves',
  parentLocation: northernZaoPlantations,
  path: null, //wip
  structuralDepth: 5,
};

const greenClawSwamp = locationsArrayDraft[13] =
{
  name: 'Green Claw Swamp',
  parentLocation: mainContinent,
  path: null, //wip
  structuralDepth: 3,
};

const taintedCaves = locationsArrayDraft[14] =
{
  name: 'Tainted Caves',
  parentLocation: greenClawSwamp,
  path: null, //wip
  structuralDepth: 4,
};

const meriana = locationsArrayDraft[15] =
{
  name: 'Meriana',
  parentLocation: shatteredIsles,
  path: null, //wip
  structuralDepth: 3,
};

const kazordoon = locationsArrayDraft[16] =
{
  name: 'Kazordoon',
  parentLocation: mainContinent,
  path: null, //wip
  structuralDepth: 3,
}

const witchesCliffs = locationsArrayDraft[17] =
{
  name: "The Witches' Cliffs",
  parentLocation: kazordoon,
  path: null, //wip
  structuralDepth: 4,
};

const isleOfEvil = locationsArrayDraft[18] =
{
  name: 'Isle of Evil',
  parentLocation: mainland,
  path: null, //wip
  structuralDepth: 2,
};

const drefia = locationsArrayDraft[19] =
{
  name: 'Drefia',
  parentLocation: darama,
  path: null, //wip
  structuralDepth: 3,
};

const lakeEquivocolao = locationsArrayDraft[20] =
{
  name: 'Lake Equivocolao',
  parentLocation: darama,
  path: null,
  structuralDepth: 3,
};

const venoreSwampArea = locationsArrayDraft[21] =
{
  name: 'Venore Swamp Area',
  parentLocation: venore,
  path: null,
  structuralDepth: 3,
}

const shadowthorn = locationsArrayDraft[10] =
{
  name: 'Shadowthorn',
  parentLocation: venoreSwampArea,
  path: null, //wip
  structuralDepth: 4,
};

const venoreSalamanderCave = locationsArrayDraft[22] =
{
  name: 'Venore Salamander Cave',
  parentLocation: venoreSwampArea,
  path: null,
  structuralDepth: 4,
}

const gnomprona = locationsArrayDraft[23] =
{
  name: 'Gnomprona',
  parentLocation: mainland,
  path: null,
  structuralDepth: 2,
}

const sparklingPools = locationsArrayDraft[24] =
{
  name: 'Sparkling Pools',
  parentLocation: gnomprona,
  path: null,
  structuralDepth: 3,
}

const goroma = locationsArrayDraft[25] =
{
  name: 'Goroma',
  parentLocation: shatteredIsles,
  path: null,
  structuralDepth: 3,
}

const edron = locationsArrayDraft[26] =
{
  name: 'Edron',
  parentLocation: mainContinent,
  path: null,
  structuralDepth: 3,
}

const nargor = locationsArrayDraft[27] =
{
  name: 'Nargor',
  parentLocation: shatteredIsles,
  path: null,
  structuralDepth: 3,
}

const thais = locationsArrayDraft[28] =
{
  name: 'Thais',
  parentLocation: mainContinent,
  path: null,
  structuralDepth: 3
}

const tibianic = locationsArrayDraft[29] =
{
  name: 'The Tibianic',
  parentLocation: thais,
  path: null,
  structuralDepth: 4,
}

const calassa = locationsArrayDraft[30] =
{
  name: 'Calassa',
  parentLocation: 'Mainland',
  path: null,
  structuralDepth: 2,
}

const iceIslands = locationsArrayDraft[31] =
{
  name: 'The Ice Islands',
  parentLocation: mainland,
  path: null,
  structuralDepth: 2,
}

const tyrsung = locationsArrayDraft[32] =
{
  name: 'Tyrsung',
  parentLocation: iceIslands,
  path: null,
  structuralDepth: 3,
}

const frozenTrench = locationsArrayDraft[33] =
{
  name: 'Frozen Trench',
  parentLocation: tyrsung,
  path: null,
  structuralDepth: 4,
}

const sunkenQuarter = locationsArrayDraft[34] =
{
  name: 'Sunken Quarter',
  parentLocation: yalahar,
  path: null,
  structuralDepth: 3,
}

const alchemistQuarter = locationsArrayDraft[35] =
{
  name: 'Alchemist Quarter',
  parentLocation: yalahar,
  path: null,
  structuralDepth: 3,
}

const inquisitionQuest = locationsArrayDraft[36] =
{
  name: 'The Inquisition Quest',
  parentLocation: mainland,
  path: null,
  structuralDepth: 2,
}

const theSunkenCaves = locationsArrayDraft[36] =
{
  name: 'The Sunken Cave',
  parentLocation: inquisitionQuest,
  path: null,
  structuralDepth: 3
}

const oramond = locationsArrayDraft[38] =
{
  name: 'Oramond',
  parentLocation: mainland,
  path: null,
  structuralDepth: 2,
}
const rathleton = locationsArrayDraft[37] =
{
  name: 'Ratlhleton',
  parentLocation: oramond,
  path: null,
  structuralDepth: 3,
}

const rathletonSewers = locationsArrayDraft[38] =
{
  name: 'Rathleton Sewers',
  parentLocation: rathleton,
  path: null,
  structuralDepth: 4,
}

const seacrestGrounds = locationsArrayDraft[38] =
{
  name: 'Seacrrest Grounds',
  parentLocation: oramond,
  path: null,
  structuralDepth: 3,
}

const malada = locationsArrayDraft[39] =
{
  name: 'Malada',
  parentLocation: shatteredIsles,
  path: null,
  structuralDepth: 3,
}

const hrodmir = locationsArrayDraft[40] =
{
  name: 'Hrodmir',
  parentLocation: 'Ice Islands',
  path: null,
  structuralDepth: 3,
}

const hrodmirQuaraScoutCaves = locationsArrayDraft[41] =
{
  name: 'Hrodmir Quara Scour Caves',
  parentLocation: 'Hrodmir',
  path: null,
  structuralDepth: 4,
}

const quaraGrotto = locationsArrayDraft[42] =
{
  name: 'Quara Grotto',
  parentLocation: 'Vandura',
  path: null,
  structuralDepth: 3,
}

const treasureIsland = locationsArrayDraft[44] =
{
  name: 'Treasure Island',
  parentLocation: 'Mainland',
  path: null,
  structuralDepth: 3,
}

const portHopeWaterElementalCave = locationsArrayDraft[45] =
{
  name: 'Port Hope Water Elemental Cave',
  parentLocation: 'Darama',
  path: null,
  structuralDepth: 3,
}

const mistrock = locationsArrayDraft[46] =
{
  name: 'Mistrock',
  parentLocation: mainland,
  path: null,
  structuralDepth: 2,
}

const svargrondSeaSerpentArea = locationsArrayDraft[47] =
{
  name: 'Svargrond Sea Serpent Area',
  parentLocation: 'Hrodmir',
  path: null,
  structuralDepth: 4,
}

const rookgard = locationsArrayDraft[48] =
{
  name: 'Rookgaard',
  parentLocation: 'Tibia Universe',
  path: null,
  structuralDepth: 1,
}

const rookgaardAcademy = locationsArrayDraft[49] =
{
  name: 'Rookgaard Academy',
  parentLocation: rookgard,
  path: null,
  structuralDepth: 2,
}

const grayIsland = locationsArrayDraft[50] =
{
  name: 'Gray Island',
  parentLocation: mainland,
  path: null,
  structuralDepth: 2,
}

const fiehonja = locationsArrayDraft[51] =
{
  name: 'Fiehonja',
  parentLocation: grayIsland,
  path: null,
  structuralDepth: 3,
}

const sunkenMines = locationsArrayDraft[52] =
{
  name: 'Sunken Mines',
  parentLocation: kazordoon,
  path: null,
  structuralDepth: 4,
}

const krailos = locationsArrayDraft[53] =
{
  name: 'Krailos',
  parentLocation: oramond,
  path: null,
  structuralDepth:  3,
}

const krailosSteppe = locationsArrayDraft[54] =
{
  name: 'Krailos Steppe',
  parentLocation: krailos,
  path: null,
  structuralDepth: 4,
}

const krailosSteppeUnderwaterCave = locationsArrayDraft[55] =
{
  name: 'Krailos Steppe Underwater Cave',
  parentLocation: krailos,
  path: null,
  structuralDepth: 5,
}

const fiehonjaLibrary = locationsArrayDraft[56] =
{
  name: 'Fiehonja Library',
  parentLocation: fiehonja,
  path: null,
  structuralDepth: 4,
}

const fiehonjaiVortex = locationsArrayDraft[57] =
{
  name: 'Fiehonja Vortex',
  parentLocation: fiehonja,
  path: null,
  structuralDepth: 4,
}

const fiehonjaiSpiral = locationsArrayDraft[58] =
{
  name: 'Fiehonja Spiral',
  parentLocation: fiehonja,
  path: null,
  structuralDepth: 4,
}

const fiehonjaEntrance = locationsArrayDraft[59] =
{
  name: 'Fiehonja Entrance',
  parentLocation: fiehonja,
  path: null,
  structuralDepth: 4,
}

const fiehonjaSoulNet = locationsArrayDraft[60] =
{
  name: 'Fiehonja Soul Net',
  parentLocation: fiehonja,
  path: null,
  structuralDepth: 4,
}

const coralMine = locationsArrayDraft[61] =
{
  name: 'Coral Mine',
  parentLocation: fiehonja,
  path: null,
  structuralDepth: 4,
}

const tanjisLair = locationsArrayDraft[62] =
{
  name: `Tanjis' Lair`,
  parentLocation: fiehonja,
  path: null,
  structuralDepth: 4,
}

const sunkenTemple = locationsArrayDraft[63] =
{
  name: 'Sunken Temple',
  parentLocation: fiehonja,
  path: null,
  structuralDepth: 4,
}

const deeplingAncestorialGrounds = locationsArrayDraft[64] =
{
  name: 'Deepling Ancestorial Grounds',
  parentLocation: fiehonja,
  path: null,
  structuralDepth: 4,
}

const sabrehaven = locationsArrayDraft[65] =
{
  name: 'Sabrehaven',
  parentLocation: meriana,
  path: null,
  structuralDepth: 4
}

const mcRonaldsFarm = locationsArrayDraft[66] =
{
  name: "The McRonald's Farm",
  parentLocation: thais,
  path: null,
  structuralDepth: 4,
}

const northport = locationsArrayDraft[67] =
{
  name: 'Northport',
  parentLocation: mainContinent,
  path: null,
  structuralDepth: 3,
}

const fibula = locationsArrayDraft[68] =
{
  name: 'Fibula',
  parentLocation: mainland,
  path: null,
  structuralDepth: 3,
}

const carlin = locationsArrayDraft[69] =
{
  name: 'Carlin',
  parentLocation: mainContinent,
  path: null,
  structuralDepth: 3,
}

const greenshore = locationsArrayDraft[70] =
{
  name: 'Greenshore',
  parentLocation: mainContinent,
  path: null,
  structuralDepth: 3,
}

const krimhorn = locationsArrayDraft[71] =
{
  name: 'Krimhorn',
  parentLocation: hrodmir,
  path: null,
  structuralDepth: 4,
}

const orcFortress = locationsArrayDraft[72] =
{
  name: 'Orc Fortress',
  parentLocation: mainContinent,
  path: null,
  structuralDepth: 3,
}

const factoryQuarter = locationsArrayDraft[73] =
{
  name: 'Factory Quarter',
  parentLocation: yalahar,
  path: null,
  structuralDepth: 3,
}

const edronFarm = locationsArrayDraft[74] =
{
  name: 'Edron Farm',
  parentLocation: edron,
  path: null,
  structuralDepth: 3,
}

const gardensOfNight = locationsArrayDraft[75] =
{
  name: 'gardensOfNight',
  parentLocation: drefia,
  path: null,
  structuralDepth: 4,
}

const zaoSteppes = locationsArrayDraft[76] =
{
  name: 'Zao Steppes',
  parentLocation: zao,
  path: null,
  structuralDepth: 3,
}

const femorHills = locationsArrayDraft[77] =
{
  name: 'Femor Hills',
  parentLocation: mainContinent,
  path: null,
  structuralDepth: 3
}

const cormaya = locationsArrayDraft[78] =
{
  name: 'Cormaya',
  parentLocation: mainland,
  path: null,
  structuralDepth: 2,
}

const edronTrollGoblinPeninsula = locationsArrayDraft[79] =
{
  name: 'Edron Troll-Goblin Peninsula',
  parentLocation: mainContinent,
  path: null,
  structuralDepth: 3,
}

const rookgardPremiumZone = locationsArrayDraft[80] =
{
  name: 'Rookgard Premium Zone',
  parentLocation: rookgard,
  path: null,
  structuralDepth: 2,
}

const abdendriel = locationsArrayDraft[81] =
{
  name: "Ab'Dendriel",
  parentLocation: mainContinent,
  path: null,
  structuralDepth: 3,
}

const abdendrielElfCaves = locationsArrayDraft[82] =
{
  name: "Ab'Dendriel Elf Caves",
  parentLocation: abdendriel,
  path: null,
  structuralDepth: 4,
}

const northernCoastOfTibia = locationsArrayDraft[83] =
{
  name: 'Northern Coast of Tibia',
  parentLocation: mainContinent,
  path: null,
  structuralDepth: 4
}

const formorgarGlacier = locationsArrayDraft[84] =
{
  name: 'Formorgar Glacier',
  parentLocation: hrodmir,
  path: null,
  structuralDepth: 4,
}

const nibelor = locationsArrayDraft[85] =
{
  name: 'Nibelor',
  parentLocation: iceIslands,
  path: null,
  structuralDepth: 3
}

const grimlund = locationsArrayDraft[86] =
{
  name: 'Grimlund',
  parentLocation: iceIslands,
  path: null,
  structuralDepth: 3,
}

const chyllfroest = locationsArrayDraft[87] =
{
  name: 'Chyllfroest',
  parentLocation: hrodmir,
  path: null,
  structuralDepth: 4,
}

const helheim = locationsArrayDraft[88] =
{
  name: 'Helheim',
  parentLocation: iceIslands,
  path: null,
  structuralDepth: 4,
}

const dryadGardens = locationsArrayDraft[89] =
{
  name: 'Dryad Gardens',
  parentLocation: cormaya,
  path: null,
  structuralDepth: 3
}

const streetsOfVenore = locationsArrayDraft[90] =
{
  name: 'Streets of Venore',
  parentLocation: venore,
  path: null,
  structuralDepth: 4,
}

const outlawCamp = locationsArrayDraft[91] =
{
  name: 'Outlaw Camp',
  parentLocation: mainContinent,
  path: null,
  structuralDepth: 3,
}

const desecratedGlade = locationsArrayDraft[91] =
{
  name: 'Desecrated Glade',
  parentLocation: outlawCamp,
  path: null,
  structuralDepth: 4,
}

const plainsOfHavoc = locationsArrayDraft[92] =
{
  name: 'Plains of Havoc',
  parentLocation: mainContinent,
  path: null,
  structuralDepth: 3,
}

const darkCathedral = locationsArrayDraft[93] =
{
  name: 'Dark Catherdral',
  parentLocation: mainContinent,
  path: null,
  structuralDepth: 3,
}

const bounac = locationsArrayDraft[94] =
{
  name: 'Bounac',
  parentLocation: mainland,
  path: null,
  structuralDepth: 2,
}

const orderOfTheLionSettlement = locationsArrayDraft[95] =
{
  name: 'Order of The Lion Settlement',
  parentLocation: bounac,
  path: null,
  structuralDepth: 3,
}

const marapur = locationsArrayDraft[96] =
{
  name: 'Marapur',
  parentLocation: mainland,
  path: null,
  structuralDepth: 2
}

const crystalEnigma = locationsArrayDraft[97] =
{
  name: 'Crystal Enigma',
  parentLocation: gnomprona,
  path: null,
  structuralDepth: 3,
}

const fieldsOfGlory = locationsArrayDraft[98] =
{
  name: 'Fields of Glory',
  parentLocation: mainContinent,
  path: null,
  structuralDepth: 3,
}

const mazeOfLostSouls = locationsArrayDraft[99] =
{
  name: 'Maze of Lost Souls',
  parentLocation: fieldsOfGlory,
  path: null,
  structuralDepth: 4,
}

const demona = locationsArrayDraft[100] =
{
  name: 'Demona',
  parentLocation: mazeOfLostSouls,
  path: null,
  structuralDepth: 5,
}

const khazeelMountains = locationsArrayDraft[101] =
{
  name: "Kha'zeel Mountains",
  parentLocation: darama,
  path: null,
  structuralDepth: 4,
}

const ashtadaramai = locationsArrayDraft[102] =
{
  name: "Ashta'daramai",
  parentLocation: khazeelMountains,
  path: null,
  structuralDepth: 5,
}

const madTechnomancerRoom = locationsArrayDraft[103] =
{
  name: 'Mad Technomancer Room',
  parentLocation: kazordoon,
  path: null,
  structuralDepth: 4,
}

const khalabalDesert = locationsArrayDraft[104] =
{
  name: "Kha'labal Desert",
  parentLocation: darama,
  path: null,
  structuralDepth: 3,
}

const tarpitTomb = locationsArrayDraft[105] =
{
  name: 'Tarpid Tomb',
  parentLocation: khalabalDesert,
  path: null,
  structuralDepth: 4,
}

const peninsulaTomb = locationsArrayDraft[106] =
{
  name: 'Peninsula Tomb',
  parentLocation: khalabalDesert,
  path: null,
  structuralDepth: 4,
}

const banuta = locationsArrayDraft[107] =
{
  name: 'Banuta',
  parentLocation: tiquanda,
  path: null,
  structuralDepth: 4,
}


const deeperBanuta = locationsArrayDraft[108] =
{
  name: 'Deeper Banuta',
  parentLocation: banuta,
  path: null,
  structuralDepth: 5,
}

const forbiddenLands  = locationsArrayDraft[109] =
{
  name: 'Forbidden Lands',
  parentLocation: tiquanda,
  path: null,
  structuralDepth: 4,
}

const beregar = locationsArrayDraft[110] =
{
  name: 'Beregar',
  parentLocation: mainland,
  path: null,
  structuralDepth: 2,
}

const beregarMines = locationsArrayDraft[111] =
{
  name: 'Beregar Mines',
  parentLocation: beregar,
  path: null,
  structuralDepth: 3,
}

const farmine = locationsArrayDraft[111] =
{
  name: 'Farmine',
  parentLocation: zao,
  path: null,
  structuralDepth: 3,
}

const farmineMines = locationsArrayDraft[112] =
{
  name: 'Farmine Mines',
  parentLocation: farmine,
  path: null,
  structuralDepth: 4,
}

const drillwormCaves = locationsArrayDraft[113] =
{
  name: 'Drillworm Caves',
  parentLocation: kazordoon,
  path: null,
  structuralDepth: 4,
}

const hrodmirCaves = locationsArrayDraft[114] =
{
  name: 'Hrodmir Caves',
  parentLocation: hrodmir,
  path: null,
  structuralDepth: 4,
}

const medusaTower = locationsArrayDraft[115] =
{
  name: 'Medusa Tower',
  parentLocation: tiquanda,
  path: null,
  structuralDepth: 4,
}

const nibelorIceCave = locationsArrayDraft[116] =
{
  name: 'Nibelor Ice Cave',
  parentLocation: nibelor,
  path: null,
  structuralDepth: 4,
}

const iceWitchTemple = locationsArrayDraft[117] =
{
  name: 'Ice Witch Temple',
  parentLocation: hrodmir,
  path: null,
  structuralDepth: 4,
}

const fenrock = locationsArrayDraft[118] =
{
  name: 'Fenrock',
  parentLocation: mainland,
  path: null,
  structuralDepth: 2,
}

const yalaharCentral = locationsArrayDraft[119] =
{
  name: 'Yalahar Central',
  parentLocation: yalahar,
  path: null,
  structuralDepth: 3,
}

const azerusRoom = locationsArrayDraft[120] =
{
  name: 'Azerus Room',
  parentLocation: yalaharCentral,
  path: null,
  structuralDepth: 4,
}

const edronMadMagesTower = locationsArrayDraft[123] =
{
  name: "Edron Mad Mage's Tower",
  parentLocation: edron,
  path: null,
  structuralDepth: 4,
}

const horestisTomb = locationsArrayDraft[124] =
{
  name: 'Horestis Tomb',
  parentLocation: khazeelMountains,
  path: null,
  structuralDepth: 6,
}

const theSpike = locationsArrayDraft[125] =
{
  name: 'The Spike',
  parentLocation: mainland,
  path: null,
  structuralDepth: 2,
}

const middleSpike = locationsArrayDraft[126] =
{
  name: 'Middle Spike',
  parentLocation: theSpike,
  path: null,
  structuralDepth: 3,
}

const upperSpike = locationsArrayDraft[127] =
{
  name: 'Upper Spike',
  parentLocation: theSpike,
  path: null,
  structuralDepth: 3,
}

const lowerSpike = locationsArrayDraft[128] =
{
  name: 'Lower Spike',
  parentLocation: theSpike,
  path: null,
  structuralDepth: 3,
}

const gnomebaseAlpha = locationsArrayDraft[130] =
{
  name: 'Damaged Crystal Golem',
  parentLocation: mainland,
  path: null,
  structuralDepth: 3,
}

const golemWorkshop = locationsArrayDraft[129] =
{
  name: 'Golem Workshop',
  parentLocation: gnomebaseAlpha,
  path: null,
  structuralDepth: 2,
}

const  warzone1 = locationsArrayDraft[130] =
{
  name: 'Warzone 1',
  parentLocation: gnomebaseAlpha,
  path: null,
  structuralDepth: 3,
}

const  warzone2 = locationsArrayDraft[131] =
{
  name: 'Warzone 2',
  parentLocation: gnomebaseAlpha,
  path: null,
  structuralDepth: 3,
}

const  warzone3 = locationsArrayDraft[132] =
{
  name: 'Warzone 3',
  parentLocation: gnomebaseAlpha,
  path: null,
  structuralDepth: 3,
}

const oramondDungeon = locationsArrayDraft[133] =
{
  name: 'Oramond Dungeon',
  parentLocation: oramond,
  path: null,
  structuralDepth: 3,
}

const  workshopQuarter = locationsArrayDraft[134] =
{
  name: 'Workshop Quarter',
  parentLocation: rathleton,
  path: null,
  structuralDepth: 4,
}

const abandodedSewers = locationsArrayDraft[135] =
{
  name: 'abandondedSewers',
  parentLocation: rathleton,
  path: null,
  structuralDepth: 4,
}

const gloothFactory = locationsArrayDraft[121] =
{
  name: 'Glooth Factory',
  parentLocation: workshopQuarter,
  path: null,
  structuralDepth: 5,
}

const undergroundGloothFactory = locationsArrayDraft[121] =
{
  name: 'Underground Glooth Factory',
  parentLocation: gloothFactory,
  path: null,
  structuralDepth: 6,
}

const jaccusMaxxensDungeon = locationsArrayDraft[122] =
{
  name: "Jaccus Maxxen's Dungeon",
  parentLocation: undergroundGloothFactory,
  path: null,
  structuralDepth: 7,
}

const replicaDungeon = locationsArrayDraft[136] =
{
  name: 'Replica Dungeon',
  parentLocation: tiquanda,
  path: null,
  structuralDepth: 4,
}

const kilmaresh = locationsArrayDraft[138] =
{
  name: 'Kilmaresh',
  parentLocation: mainland,
  path: null,
  structuralDepth: 2
}

const issavi = locationsArrayDraft[137] =
{
  name: 'Issavi',
  parentLocation: kilmaresh,
  path: null,
  structuralDepth: 3,
}

const isleOfTheKings = locationsArrayDraft[138] =
{
  name: 'Isle of the Kings',
  parentLocation: mainland,
  path: null,
  structuralDepth: 2,
}

const secretLibrary = locationsArrayDraft[139] =
{
  name: 'Secret Library',
  parentLocation: isleOfTheKings,
  path: null,
  structuralDepth: 3,
}
const perchtIsland = locationsArrayDraft[139] =
{
  name: 'Percht Island',
  parentLocation: mainland,
  path: null,
  structuralDepth: 3,
}

const rottenWasteland = locationsArrayDraft[140] =
{
  name: 'Rotten Wasteland',
  parentLocation: kilmaresh,
  path: null,
  structuralDepth: 3,
}

const darashia = locationsArrayDraft[141] =
{
  name: 'Darashia',
  parentLocation: darama,
  path: null,
  structuralDepth: 3,
}

const jakundafDesert = locationsArrayDraft[143] =
{
  name: 'Jakundaf Desert',
  parentLocation: mainContinent,
  path: null,
  structuralDepth: 3
}

const desertDungeon = locationsArrayDraft[142] =
{
  name: 'Desert Dungeon',
  parentLocation: jakundafDesert,
  path: null,
  structuralDepth: 4,
}

const ancientTemple = locationsArrayDraft[143] =
{
  name: 'Ancient Temple',
  parentLocation: mainContinent,
  path: null,
  structuralDepth: 3,
}

const magicianTower = locationsArrayDraft[144] =
{
  name: 'Magician Tower',
  parentLocation: mainContinent,
  path: null,
  structuralDepth: 3,
}

const mountSternum = locationsArrayDraft[145] =
{
  name: 'Mount Sternum',
  parentLocation: mainContinent,
  path: null,
  structuralDepth: 3,
}

const shadowTomb = locationsArrayDraft[146] =
{
  name: 'Shadow Tomb',
  parentLocation: khalabalDesert,
  path: null,
  structuralDepth: 4,
}

const spikeSwordQuestArea = locationsArrayDraft[147] =
{
  name: 'Spike Sword Quest Area',
  parentLocation: mainContinent,
  path: null,
  structuralDepth: 3,
}

const pitsOfInferno = locationsArrayDraft[148] =
{
  name: 'Pits of Inferno',
  parentLocation: plainsOfHavoc,
  path: null,
  structuralDepth: 4,
}

const vengoth = locationsArrayDraft[149] =
{
  name: 'Vengoth',
  parentLocation: zao,
  path: null,
  structuralDepth: 3,
}

const vengothCastle = locationsArrayDraft[150] =
{
  name: 'Vengoth Castle',
  parentLocation: vengoth,
  path: null,
  structuralDepth: 4,
}

// const bloodHalls = locationsArrayDraft[151] =
// {
//   name: 'Blood Halls', ///here
//   parentLocation: ,
//   path: null,
//   structuralDepth: ,
// }

// const  = locationsArrayDraft[] =
// {
//   name: '',
//   parentLocation: ,
//   path: null,
//   structuralDepth: ,
// }

// const  = locationsArrayDraft[] =
// {
//   name: '',
//   parentLocation: ,
//   path: null,
//   structuralDepth: ,
// }
export const locationsArray = locationsArrayDraft.sort( (a: Locations, b: Locations) =>
  {
    return a.structuralDepth - b.structuralDepth;
  });
