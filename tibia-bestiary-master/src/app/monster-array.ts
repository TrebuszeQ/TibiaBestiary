////Imports

///interface's arrays
import { categoryArray } from "./category-array";
import { monsterDescriptionsArray, searchForDescription } from "./monsterDescriptions-array";
///interfaces
import { Monster } from "./monster";
///types
import { Locations } from "./locations";
///services
import { LocationsService } from "./locations.service";


////Program

const amphibic = categoryArray[0];
const aquatic = categoryArray[1];
const birds = categoryArray[2];
const constructs = categoryArray[3];
const demon = categoryArray[4];

let locationsArray: Locations[] = [];
let locationsService: LocationsService;

const meriana = searchForLocation('Meriana');
const lagunaIslands = searchForLocation('Laguna Islands');
const portHope = searchForLocation('Port Hope');


///methods
function getLocations(): void
{
  locationsService.fetchLocations().subscribe((subscribed => {locationsArray = subscribed}));
}
getLocations()

function searchForLocation(name: string): Locations
{
  const index = locationsArray.findIndex((value) =>
  {
    const newValueName = value.name.trim().toLowerCase();
    const newName = name.trim().toLowerCase();
    return newValueName === newName;
  })
  return locationsArray[index];
}

///Interface
const monsterArray: Monster[] = [];
monsterArray[0] =
{
  name: 'Toad',
  category: amphibic,
  loot: null,
  difficulty: 'Easy',
  occurence: 'common',
  description: searchForDescription('Toad'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: true,
    },
  resistance:
    {
      physical: 100,
      earth: 80,
      fire: 110,
      death: 100,
      energy: 100,
      holy: 100,
      ice: 80,
      healing: 100
    },
  locations:
    [
      searchForLocation('Meriana'),
      searchForLocation('Laguna Islands'),
      searchForLocation('Arena and Zoo Quarter'),
      searchForLocation('Tiquanda Tarantula Caves'),
      searchForLocation('Shadowthorn'),
      searchForLocation('Northern Zao Plantations'),
      searchForLocation('Brimstone Bug Cave'),
      searchForLocation('Tainted Caves')
    ],
  hitpoints: 135,
  experience: 60,
  speed: 105,
  armor: 6,
  charmPoints: 15
};

monsterArray[1] =
{
  name: 'Green Frog',
  category: amphibic,
  loot: null,
  difficulty: 'Trivial',
  occurence: 'common',
  description: searchForDescription('Green Frog'),
  fightStyle:
    {
      melee: false,
      ranged: false,
      spells: false,
    },
  resistance:
    {
      physical: 100,
      earth: 100,
      fire: 100,
      death: 100,
      energy: 100,
      holy: 100,
      ice: 100,
      healing: 100
    },
  locations:
    [
      searchForLocation('Meriana'),
      searchForLocation('lagunaIslands'),
      searchForLocation('Port Hope'),
      searchForLocation("The Witches' Cliff"),
    ],
  hitpoints: 25,
  experience: 0,
  speed: 160,
  armor: 0,
  charmPoints: 5
};

monsterArray[2] =
{
  name: 'Azure Frog',
  category: amphibic,
  loot: null,
  difficulty: 'Easy',
  occurence: 'common',
  description: searchForDescription('Azure Frog'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: false,
    },
  resistance:
    {
      physical: 100,
      earth: 100,
      fire: 110,
      death: 100,
      energy: 100,
      holy: 100,
      ice: 90,
      healing: 100
    },
  locations:
    [
      searchForLocation('Meriana'),
      searchForLocation('Laguna Islands'),
      searchForLocation('Shattered Isles'),
    ],
  hitpoints: 60,
  experience: 20,
  speed: 160,
  armor: 8,
  charmPoints: 15
};

const coralFrog = monsterArray[3] =
{
  name: 'Coral Frog',
  category: amphibic,
  loot: null,
  difficulty: 'Easy',
  occurence: 'common',
  description: searchForDescription('Coral Frog'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: false,
    },
  resistance:
    {
      physical: 100,
      earth: 100,
      fire: 110,
      death: 100,
      energy: 100,
      holy: 100,
      ice: 90,
      healing: 100
    },
  locations:
    [
      searchForLocation('Meriana'),
      searchForLocation('Laguna Islands'),
      searchForLocation('Shattered Isles'),
    ],
  hitpoints: 60,
  experience: 20,
  speed: 160,
  armor: 8,
  charmPoints: 15
}

const crimsonFrog = monsterArray[4] =
{
  name: 'Crimson Frog',
  category: amphibic,
  loot: null,
  difficulty: 'Easy',
  occurence: 'common',
  description: searchForDescription('Crimson Frog'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: false,
    },
  resistance:
    {
      physical: 100,
      earth: 100,
      fire: 110,
      death: 100,
      energy: 100,
      holy: 100,
      ice: 90,
      healing: 100
    },
  locations:
    [
      searchForLocation('Meriana'),
      searchForLocation('Laguna Islands'),
      searchForLocation('Shattered Isles'),
    ],
  hitpoints: 60,
  experience: 20,
  speed: 160,
  armor: 8,
  charmPoints: 15
}

const orchidFrog = monsterArray[4] =
{
  name: 'Orchid Frog',
  category: amphibic,
  loot: null,
  difficulty: 'Easy',
  occurence: 'common',
  description: searchForDescription('Orchid Frog'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: false,
    },
  resistance:
    {
      physical: 100,
      earth: 100,
      fire: 110,
      death: 100,
      energy: 100,
      holy: 100,
      ice: 90,
      healing: 100
    },
  locations:
    [
      searchForLocation('Meriana'),
      searchForLocation('Laguna Islands'),
      searchForLocation('Shattered Isles'),
    ],
  hitpoints: 60,
  experience: 20,
  speed: 160,
  armor: 8,
  charmPoints: 15
}

const infernalFrog = monsterArray[5] =
{
  name: 'Infernal Frog',
  category: amphibic,
  loot: null,
  difficulty: 'Medium',
  occurence: 'uncommon',
  description: searchForDescription('Infernal Frog'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: true,
    },
  resistance:
    {
      physical: 100,
      earth: 0,
      fire: 190,
      death: 100,
      energy: 100,
      holy: 100,
      ice: 100,
      healing: 100
    },
  locations:
    [
      searchForLocation('Isle of Evil'),
      searchForLocation('Drefia'),
    ],
  hitpoints: 655,
  experience: 190,
  speed: 100,
  armor: 18,
  charmPoints: 25
}

const filthToad = monsterArray[6] =
{
  name: 'Filth Toad',
  category: amphibic,
  loot: null,
  difficulty: 'Easy',
  occurence: 'uncommon',
  description: searchForDescription('Infernal Frog'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: false,
    },
  resistance:
    {
      physical: 100,
      earth: 80,
      fire: 110,
      death: 100,
      energy: 100,
      holy: 100,
      ice: 80,
      healing: 100
    },
  locations:
    [
      searchForLocation('Tiquanda'),
      searchForLocation('Lake Equivocolao'),
    ],
  hitpoints: 185,
  experience: 90,
  speed: 105,
  armor: 6,
  charmPoints: 15
}

const bogFrog = monsterArray[7] =
{
  name: 'Bog Frog',
  category: amphibic,
  loot: null,
  difficulty: 'Trivial',
  occurence: 'common',
  description: searchForDescription('Infernal Frog'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: false,
    },
  resistance:
    {
      physical: 100,
      earth: 100,
      fire: 100,
      death: 100,
      energy: 100,
      holy: 100,
      ice: 100,
      healing: 100
    },
  locations:
    [
      searchForLocation('Shadowthorn'),
      searchForLocation('Lake Equivocolao'),
      searchForLocation('Drefia'),
    ],
  hitpoints: 25,
  experience: 0,
  speed: 160,
  armor: 2,
  charmPoints: 5,
}

const Salamander = monsterArray[8] =
{
  name: 'Salamander',
  category: amphibic,
  loot: null,
  difficulty: 'Easy',
  occurence: 'common',
  description: searchForDescription('Salamander'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: false,
    },
  resistance:
    {
      physical: 100,
      earth: 90,
      fire: 100,
      death: 100,
      energy: 100,
      holy: 100,
      ice: 100,
      healing: 100
    },
  locations:
    [
      searchForLocation('Venore swamp area'),
      searchForLocation('Venore Salamander Cave'),
      searchForLocation('Drefia'),
    ],
  hitpoints: 70,
  experience: 25,
  speed: 60,
  armor: 3,
  charmPoints: 15,
};

const emeraldTortoise = monsterArray[9] =
{
  name: 'Emerald Tortoise',
  category: amphibic,
  loot: null,
  difficulty: 'Challenging',
  occurence: 'common',
  description: searchForDescription('Emerald Tortoise'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: true,
    },
  resistance:
    {
      physical: 80,
      earth: 90,
      fire: 90,
      death: 100,
      energy: 90,
      holy: 90,
      ice: 90,
      healing: 100
    },
  locations:
    [
      searchForLocation('Sparkling Pools'),
    ],
  hitpoints: 21040,
  experience: 14070,
  speed: 179,
  armor: 97,
  charmPoints: 100,
};

const crab = monsterArray[10] =
{
  name: 'Crab',
  category: aquatic,
  loot: null,
  difficulty: 'Easy',
  occurence: 'common',
  description: searchForDescription('Crab'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: false,
    },
  resistance:
    {
      physical: 80,
      earth: 0,
      fire: 110,
      death: 100,
      energy: 110,
      holy: 100,
      ice: 80,
      healing: 100
    },
  locations:
    [
      searchForLocation('Goroma'),
      searchForLocation('Shattered Isles'),
      searchForLocation('Port Hope'),
      searchForLocation('Nargor'),
      searchForLocation('The Tibianic'),
    ],
  hitpoints: 55,
  experience: 30,
  speed: 100,
  armor: 28,
  charmPoints: 15,
};

const quaraPredator = monsterArray[11] =
{
  name: 'Quara Predator',
  category: aquatic,
  loot: null,
  difficulty: 'Medium',
  occurence: 'common',
  description: searchForDescription('Quara Predator'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: true,
    },
  resistance:
    {
      physical: 100,
      earth: 110,
      fire: 0,
      death: 100,
      energy: 125,
      holy: 100,
      ice: 0,
      healing: 100
    },
  locations:
    [
      searchForLocation('Calassa'),
      searchForLocation('Frozen Trench'),
      searchForLocation('Sunken Quarter'),
      searchForLocation('theSunkenCaves'),
      searchForLocation('Seacrest Grounds'),
    ],
  hitpoints: 2200,
  experience: 1600,
  speed: 225,
  armor: 40,
  charmPoints: 25,
}

const quaraPredatorScout = monsterArray[12] =
{
  name: 'Quara Predator Scout',
  category: aquatic,
  loot: null,
  difficulty: 'Medium',
  occurence: 'common',
  description: searchForDescription('Quara Predator Scout'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: false,
    },
  resistance:
    {
      physical: 100,
      earth: 110,
      fire: 0,
      death: 100,
      energy: 110,
      holy: 100,
      ice: 0,
      healing: 100
    },
  locations:
    [
      searchForLocation('Malada'),
      searchForLocation('Hrodmir Quara Scout Caves'),
      searchForLocation('Quara Grotto'),
      searchForLocation('Oramond'),
    ],
  hitpoints: 890,
  experience: 400,
  speed: 85,
  armor: 30,
  charmPoints: 25,
};

const quaraConstrictor = monsterArray[13] =
{
  name: 'Quara Constrictor',
  category: aquatic,
  loot: null,
  difficulty: 'Medium',
  occurence: 'common',
  description: searchForDescription('Quara Constrictor'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: true,
    },
  resistance:
    {
      physical: 100,
      earth: 110,
      fire: 0,
      death: 100,
      energy: 125,
      holy: 100,
      ice: 0,
      healing: 100
    },
  locations:
    [
      searchForLocation('Calassa'),
      searchForLocation('Frozen Trench'),
      searchForLocation('Sunken Quarter'),
    ],
  hitpoints: 450,
  experience: 250,
  speed: 190,
  armor: 14,
  charmPoints: 25,
};

const quaraConstrictorScout = monsterArray[14] =
{
  name: 'Quara Constrictor Scout',
  category: aquatic,
  loot: null,
  difficulty: 'Medium',
  occurence: 'common',
  description: searchForDescription('Quara Constrictor Scout'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: true,
    },
  resistance:
    {
      physical: 100,
      earth: 110,
      fire: 0,
      death: 100,
      energy: 110,
      holy: 100,
      ice: 0,
      healing: 100
    },
  locations:
    [
      searchForLocation('Malada'),
      searchForLocation('Hrodmir Quara Scout Caves'),
      searchForLocation('Quara Grotto'),
      searchForLocation('Oramond'),
      searchForLocation('Arena Quarter'),
      searchForLocation('Treasure Island'),
    ],
  hitpoints: 450,
  experience: 200,
  speed: 75,
  armor: 14,
  charmPoints: 25,
};

const quaraMantassin = monsterArray[15] =
{
  name: 'Quara Mantassin',
  category: aquatic,
  loot: null,
  difficulty: 'Medium',
  occurence: 'common',
  description: searchForDescription('Quara Mantassin'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: true,
    },
  resistance:
    {
      physical: 100,
      earth: 110,
      fire: 0,
      death: 100,
      energy: 125,
      holy: 100,
      ice: 0,
      healing: 100
    },
  locations:
    [
      searchForLocation('Calassa'),
      searchForLocation('Frozen Trench'),
      searchForLocation('Sunken Quarter'),
    ],
  hitpoints: 800,
  experience: 400,
  speed: 295,
  armor: 16,
  charmPoints: 25,
};

const quaraMantassinScout = monsterArray[16] =
{
  name: 'Quara Mantassin Scout',
  category: aquatic,
  loot: null,
  difficulty: 'Easy',
  occurence: 'common',
  description: searchForDescription('Quara Mantassin Scout'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: false,
    },
  resistance:
    {
      physical: 100,
      earth: 110,
      fire: 0,
      death: 100,
      energy: 110,
      holy: 100,
      ice: 0,
      healing: 100
    },
  locations:
    [
      searchForLocation('Malada'),
      searchForLocation('Hrodmir Quara Scout Caves'),
      searchForLocation('Quara Grotto'),
      searchForLocation('Oramond'),
      searchForLocation('Port Hope Water Elemental Cave'),
    ],
  hitpoints: 450,
  experience: 200,
  speed: 75,
  armor: 14,
  charmPoints: 25,
};

const quaraHydromancer = monsterArray[17] =
{
  name: 'Quara Hydromancer',
  category: aquatic,
  loot: null,
  difficulty: 'Medium',
  occurence: 'common',
  description: searchForDescription('Quara Hydromancer'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: true,
    },
  resistance:
    {
      physical: 100,
      earth: 110,
      fire: 0,
      death: 100,
      energy: 125,
      holy: 100,
      ice: 0,
      healing: 100
    },
  locations:
    [
      searchForLocation('Calassa'),
      searchForLocation('Frozen Trench'),
      searchForLocation('Sunken Quarter'),
    ],
  hitpoints: 1100,
  experience: 800,
  speed: 245,
  armor: 30,
  charmPoints: 25,
};

const quaraHydromancerScout = monsterArray[18] =
{
  name: 'Quara Hydromancer Scout',
  category: aquatic,
  loot: null,
  difficulty: 'Medium',
  occurence: 'common',
  description: searchForDescription('Quara Hydromancer Scout'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: false,
    },
  resistance:
    {
      physical: 100,
      earth: 110,
      fire: 0,
      death: 100,
      energy: 110,
      holy: 100,
      ice: 0,
      healing: 100
    },
  locations:
    [
      searchForLocation('Malada'),
      searchForLocation('Hrodmir Quara Scout Caves'),
      searchForLocation('Quara Grotto'),
      searchForLocation('Oramond'),
    ],
  hitpoints: 1100,
  experience: 800,
  speed: 95,
  armor: 30,
  charmPoints: 25,
};

const quaraPincher = monsterArray[19] =
{
  name: 'Quara Pincher',
  category: aquatic,
  loot: null,
  difficulty: 'Medium',
  occurence: 'common',
  description: searchForDescription('Quara Pincher'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: true,
    },
  resistance:
    {
      physical: 100,
      earth: 110,
      fire: 0,
      death: 100,
      energy: 125,
      holy: 100,
      ice: 0,
      healing: 100
    },
  locations:
    [
      searchForLocation('Calassa'),
      searchForLocation('Frozen Trench'),
      searchForLocation('Sunken Quarter'),
    ],
  hitpoints: 1800,
  experience: 1200,
  speed: 198,
  armor: 85,
  charmPoints: 25,
};

const quaraPincherScout = monsterArray[20] =
{
  name: 'Quara Pincher Scout',
  category: aquatic,
  loot: null,
  difficulty: 'Medium',
  occurence: 'common',
  description: searchForDescription('Quara Pincher Scout'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: true,
    },
  resistance:
    {
      physical: 100,
      earth: 110,
      fire: 0,
      death: 100,
      energy: 110,
      holy: 100,
      ice: 0,
      healing: 100
    },
  locations:
    [
      searchForLocation('Malada'),
      searchForLocation('Hrodmir Quara Scout Caves'),
      searchForLocation('Quara Grotto'),
      searchForLocation('Oramond'),
    ],
  hitpoints: 775,
  experience: 600,
  speed: 78,
  armor: 70,
  charmPoints: 25,
};

const bloodCrab = monsterArray[21] =
{
  name: 'Blood Crab',
  category: aquatic,
  loot: null,
  difficulty: 'Easy',
  occurence: 'common',
  description: searchForDescription('Blood Crab'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: false,
    },
  resistance:
    {
      physical: 95,
      earth: 0,
      fire: 110,
      death: 100,
      energy: 105,
      holy: 100,
      ice: 0,
      healing: 100
    },
  locations:
    [
      searchForLocation('Goroma'),
      searchForLocation('Laguna Islands'),
      searchForLocation('Shattered Isles'),
      searchForLocation('Treasure Island'),
      searchForLocation('Tibianic'),
      searchForLocation('Port Hope'),
      searchForLocation('Mistrock'),
    ],
  hitpoints: 290,
  experience: 160,
  speed: 80,
  armor: 28,
  charmPoints: 15,
};

const deepSeaBloodCrab = monsterArray[21] =
{
  name: 'Deepsea Blood Crab',
  category: aquatic,
  loot: null,
  difficulty: 'Easy',
  occurence: 'common',
  description: searchForDescription('Deepsea Blood Crab'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: false,
    },
  resistance:
    {
      physical: 95,
      earth: 0,
      fire: 110,
      death: 100,
      energy: 105,
      holy: 100,
      ice: 0,
      healing: 100
    },
  locations:
    [
      searchForLocation('Svargrond Sea Serpent Area'),
      searchForLocation('Drefia'),
      searchForLocation('Rookgaard Academy'),
    ],
  hitpoints: 320,
  experience: 180,
  speed: 190,
  armor: 28,
  charmPoints: 15,
};

const crustaceaGigantica = monsterArray[22] =
{
  name: 'Crustacea Gigantica',
  category: aquatic,
  loot: null,
  difficulty: 'Easy',
  occurence: 'very rare',
  description: searchForDescription('Crustacea Gigantica'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: true,
    },
  resistance:
    {
      physical: 80,
      earth: 0,
      fire: 100,
      death: 90,
      energy: 105,
      holy: 100,
      ice: 0,
      healing: 100
    },
  locations:
    [
      searchForLocation('Calassa'),
      searchForLocation('Treasure Island'),
      searchForLocation('svargrondSeaSerpentArea'),
    ],
  hitpoints: 1600,
  experience: 1800,
  speed: 240,
  armor: 40,
  charmPoints: 50,
};

const deeplingScout = monsterArray[23] =
{
  name: 'Deepling Scout',
  category: aquatic,
  loot: null,
  difficulty: 'Medium',
  occurence: 'common',
  description: searchForDescription('Deepling Scout'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: false,
    },
  resistance:
    {
      physical: 100,
      earth: 110,
      fire: 0,
      death: 100,
      energy: 110,
      holy: 100,
      ice: 0,
      healing: 100
    },
  locations:
    [
      searchForLocation('Fiehonja'),
      searchForLocation('Sunken Mines'),
    ],
  hitpoints: 240,
  experience: 160,
  speed: 65,
  armor: 7,
  charmPoints: 25,
};

const deeplingWarrior = monsterArray[24] =
{
  name: 'Deepling Warrior',
  category: aquatic,
  loot: null,
  difficulty: 'Medium',
  occurence: 'common',
  description: searchForDescription('Deepling Warrior'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: true,
    },
  resistance:
    {
      physical: 100,
      earth: 110,
      fire: 0,
      death: 90,
      energy: 110,
      holy: 100,
      ice: 0,
      healing: 100
    },
  locations:
    [
      searchForLocation('Fiehonja'),
    ],
  hitpoints: 1600,
  experience: 1500,
  speed: 145,
  armor: 40,
  charmPoints: 25,
};

const deeplingGuardian = monsterArray[25] =
{
  name: 'Deepling Guardian',
  category: aquatic,
  loot: null,
  difficulty: 'Medium',
  occurence: 'common',
  description: searchForDescription('Deepling Guardian'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: true,
    },
  resistance:
    {
      physical: 100,
      earth: 110,
      fire: 0,
      death: 90,
      energy: 110,
      holy: 100,
      ice: 0,
      healing: 100
    },
  locations:
    [
      searchForLocation('Fiehonja'),
    ],
  hitpoints: 1900,
  experience: 2100,
  speed: 135,
  armor: 53,
  charmPoints: 25,
};

const deeplingSpellsinger = monsterArray[26] =
{
  name: 'Deepling Spellsinger',
  category: aquatic,
  loot: null,
  difficulty: 'Medium',
  occurence: 'common',
  description: searchForDescription('Deepling Spellsinger'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: true,
    },
  resistance:
    {
      physical: 100,
      earth: 110,
      fire: 0,
      death: 50,
      energy: 110,
      holy: 100,
      ice: 0,
      healing: 100
    },
  locations:
    [
      searchForLocation('Fiehonja'),
    ],
  hitpoints: 850,
  experience: 1000,
  speed: 95,
  armor: 42,
  charmPoints: 25,
};

const mantaRay = monsterArray[27] =
{
  name: 'Manta Ray',
  category: aquatic,
  loot: null,
  difficulty: 'Medium',
  occurence: 'rare',
  description: searchForDescription('Manta Ray'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: true,
    },
  resistance:
    {
      physical: 95,
      earth: 0,
      fire: 0,
      death: 100,
      energy: 105,
      holy: 100,
      ice: 75,
      healing: 100
    },
  locations:
    [
      searchForLocation('Fiehonja'),
    ],
  hitpoints: 680,
  experience: 125,
  speed: 84,
  armor: 42,
  charmPoints: 25,
};

const calamary = monsterArray[28] =
{
  name: 'Calamary',
  category: aquatic,
  loot: null,
  difficulty: 'Easy',
  occurence: 'uncommon',
  description: searchForDescription('Calamary'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: false,
    },
  resistance:
    {
      physical: 105,
      earth: 0,
      fire: 0,
      death: 100,
      energy: 105,
      holy: 100,
      ice: 75,
      healing: 100
    },
  locations:
    [
      searchForLocation('Fiehonja'),
    ],
  hitpoints: 75,
  experience: 0,
  speed: 100,
  armor: 13,
  charmPoints: 15,
};

const jellyfish = monsterArray[29] =
{
  name: 'Jellyfish',
  category: aquatic,
  loot: null,
  difficulty: 'Easy',
  occurence: 'uncommon',
  description: searchForDescription('Jellyfish'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: true,
    },
  resistance:
    {
      physical: 105,
      earth: 0,
      fire: 0,
      death: 100,
      energy: 105,
      holy: 100,
      ice: 75,
      healing: 100
    },
  locations:
    [
      searchForLocation('Fiehonja'),
      searchForLocation('Krailos Steppe Underwater Cave'),
    ],
  hitpoints: 55,
  experience: 0,
  speed: 84,
  armor: 11,
  charmPoints: 15,
};

const shark = monsterArray[30] =
{
  name: 'Shark',
  category: aquatic,
  loot: null,
  difficulty: 'Medium',
  occurence: 'common',
  description: searchForDescription('Shark'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: true,
    },
  resistance:
    {
      physical: 105,
      earth: 80,
      fire: 45,
      death: 100,
      energy: 105,
      holy: 100,
      ice: 90,
      healing: 100
    },
  locations:
    [
      searchForLocation('Fiehonja'),
      searchForLocation('Krailos Steppe Underwater Cave'),
      searchForLocation('Seacrest Grounds')
    ],
  hitpoints: 1200,
  experience: 700,
  speed: 145,
  armor: 32,
  charmPoints: 25,
};

const northernPike = monsterArray[31] =
{
  name: 'Northern Pike',
  category: aquatic,
  loot: null,
  difficulty: 'Harmless',
  occurence: 'uncommon',
  description: searchForDescription('Northern Pike'),
  fightStyle:
    {
      melee: false,
      ranged: false,
      spells: false,
    },
  resistance:
    {
      physical: 105,
      earth: 0,
      fire: 0,
      death: 100,
      energy: 105,
      holy: 100,
      ice: 90,
      healing: 100
    },
  locations:
    [
      searchForLocation('Fiehonja'),
      searchForLocation('Krailos Steppe Underwater Cave'),
    ],
  hitpoints: 95,
  experience: 0,
  speed: 105,
  armor: 9,
  charmPoints: 1,
};

const fish = monsterArray[32] =
{
  name: 'Fish',
  category: aquatic,
  loot: null,
  difficulty: 'Trivial',
  occurence: 'common',
  description: searchForDescription('fish'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: false,
    },
  resistance:
    {
      physical: 105,
      earth: 0,
      fire: 0,
      death: 100,
      energy: 105,
      holy: 100,
      ice: 90,
      healing: 100
    },
  locations:
    [
      searchForLocation('Fiehonja'),
    ],
  hitpoints: 25,
  experience: 0,
  speed: 70,
  armor: 9,
  charmPoints: 5,
};

const deeplingWorker = monsterArray[33] =
{
  name: 'Deepling Worker',
  category: aquatic,
  loot: null,
  difficulty: 'Easy',
  occurence: 'common',
  description: searchForDescription('Deepling Worker'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: true,
    },
  resistance:
    {
      physical: 100,
      earth: 110,
      fire: 0,
      death: 100,
      energy: 110,
      holy: 100,
      ice: 90,
      healing: 100
    },
  locations:
    [
      searchForLocation('Fiehonja Soul Net'),
      searchForLocation('Coral Mine')
    ],
  hitpoints: 190,
  experience: 130,
  speed: 65,
  armor: 7,
  charmPoints: 15,
};

const deeplingBrawler = monsterArray[34] =
{
  name: 'Deepling Brawler',
  category: aquatic,
  loot: null,
  difficulty: 'Medium',
  occurence: 'uncommon',
  description: searchForDescription('Deepling Brawler'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: true,
    },
  resistance:
    {
      physical: 100,
      earth: 110,
      fire: 0,
      death: 100,
      energy: 110,
      holy: 100,
      ice: 0,
      healing: 100
    },
  locations:
    [
      searchForLocation('Fiehonja'),
    ],
  hitpoints: 380,
  experience: 260,
  speed: 85,
  armor: 18,
  charmPoints: 25,
};

const deeplingMasterLibrarian = monsterArray[35] =
{
  name: 'Deepling Master Librarian',
  category: aquatic,
  loot: null,
  difficulty: 'Medium',
  occurence: 'rare',
  description: searchForDescription('Deepling Master Librarian'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: true,
    },
  resistance:
    {
      physical: 100,
      earth: 110,
      fire: 0,
      death: 50,
      energy: 110,
      holy: 100,
      ice: 0,
      healing: 100
    },
  locations:
    [
      searchForLocation('Fiehonja'),
    ],
  hitpoints: 1700,
  experience: 1900,
  speed: 115,
  armor: 45,
  charmPoints: 25,
};

const deeplingTyrant = monsterArray[36] =
{
  name: 'Deepling Tyrant',
  category: aquatic,
  loot: null,
  difficulty: 'Hard',
  occurence: 'rare',
  description: searchForDescription('Deepling Tyrant'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: true,
    },
  resistance:
    {
      physical: 100,
      earth: 110,
      fire: 0,
      death: 90,
      energy: 110,
      holy: 100,
      ice: 0,
      healing: 100
    },
  locations:
    [
      searchForLocation('Fiehonja'),
    ],
  hitpoints: 4500,
  experience: 4200,
  speed: 155,
  armor: 54,
  charmPoints: 50,
};

const deeplingElite = monsterArray[37] =
{
  name: 'Deepling Elite',
  category: aquatic,
  loot: null,
  difficulty: 'Medium',
  occurence: 'uncommon',
  description: searchForDescription('Deepling Elite'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: true,
    },
  resistance:
    {
      physical: 100,
      earth: 110,
      fire: 0,
      death: 90,
      energy: 110,
      holy: 100,
      ice: 0,
      healing: 100
    },
  locations:
    [
      searchForLocation("Tanijs' Lair"),
    ],
  hitpoints: 3200,
  experience: 3000,
  speed: 165,
  armor: 45,
  charmPoints: 25,
};

const renegadeQuaraConstrictor = monsterArray[38] =
{
  name: 'Renegade Quara Constrictor',
  category: aquatic,
  loot: null,
  difficulty: 'Medium',
  occurence: 'rare',
  description: searchForDescription('Renegade Quara Constrictor'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: true,
    },
  resistance:
    {
      physical: 100,
      earth: 110,
      fire: 0,
      death: 90,
      energy: 125,
      holy: 100,
      ice: 0,
      healing: 100
    },
  locations:
    [
      searchForLocation("Seacrest Grounds"),
    ],
  hitpoints: 1500,
  experience: 1250,
  speed: 190,
  armor: 35,
  charmPoints: 25,
};

const renegadeQuaraHydromancer = monsterArray[39] =
{
  name: 'Renegade Quara Hydromancer',
  category: aquatic,
  loot: null,
  difficulty: 'Medium',
  occurence: 'rare',
  description: searchForDescription('Renegade Quara Hydromancer'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: true,
    },
  resistance:
    {
      physical: 100,
      earth: 110,
      fire: 0,
      death: 90,
      energy: 125,
      holy: 100,
      ice: 0,
      healing: 100
    },
  locations:
    [
      searchForLocation("Seacrest Grounds"),
    ],
  hitpoints: 2000,
  experience: 1800,
  speed: 245,
  armor: 30,
  charmPoints: 25,
};

const renegadeQuaraMantassin = monsterArray[40] =
{
  name: 'Renegade Quara Mantassin',
  category: aquatic,
  loot: null,
  difficulty: 'Medium',
  occurence: 'rare',
  description: searchForDescription('Renegade Quara Mantassin'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: true,
    },
  resistance:
    {
      physical: 100,
      earth: 110,
      fire: 0,
      death: 90,
      energy: 125,
      holy: 100,
      ice: 0,
      healing: 100
    },
  locations:
    [
      searchForLocation("Seacrest Grounds"),
    ],
  hitpoints: 2800,
  experience: 2200,
  speed: 198,
  armor: 65,
  charmPoints: 25,
};

const renegadeQuaraPredator = monsterArray[41] =
{
  name: 'Renegade Quara Predator',
  category: aquatic,
  loot: null,
  difficulty: 'Medium',
  occurence: 'rare',
  description: searchForDescription('Renegade Quara Predator'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: true,
    },
  resistance:
    {
      physical: 100,
      earth: 110,
      fire: 0,
      death: 90,
      energy: 125,
      holy: 100,
      ice: 0,
      healing: 100
    },
  locations:
    [
      searchForLocation("Seacrest Grounds"),
    ],
  hitpoints: 3250,
  experience: 2700,
  speed: 225,
  armor: 40,
  charmPoints: 25,
};

const abyssalCalamary = monsterArray[42] =
{
  name: 'Abyssal Calamary',
  category: aquatic,
  loot: null,
  difficulty: 'Easy',
  occurence: 'common',
  description: searchForDescription('Abyssal Calamary'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: false,
    },
  resistance:
    {
      physical: 105,
      earth: 0,
      fire: 0,
      death: 100,
      energy: 105,
      holy: 100,
      ice: 100,
      healing: 100
    },
  locations:
    [
      searchForLocation("Seacrest Grounds"),
    ],
  hitpoints: 300,
  experience: 200,
  speed: 140,
  armor: 12,
  charmPoints: 15,
};

const deathlingScout = monsterArray[43] =
{
  name: 'Deathling Scout',
  category: aquatic,
  loot: null,
  difficulty: 'Hard',
  occurence: 'common',
  description: searchForDescription('Deathling Scout'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: true,
    },
  resistance:
    {
      physical: 100,
      earth: 110,
      fire: 0,
      death: 90,
      energy: 110,
      holy: 100,
      ice: 0,
      healing: 100
    },
  locations:
    [
      searchForLocation('Deepling Ancestorial Grounds'),
      searchForLocation('Sunken Temple'),
    ],
  hitpoints: 7200,
  experience: 6300,
  speed: 155,
  armor: 72,
  charmPoints: 50,
};

const deathlingSpellsingert = monsterArray[44] =
{
  name: 'Deathling Spellsinger',
  category: aquatic,
  loot: null,
  difficulty: 'Hard',
  occurence: 'common',
  description: searchForDescription('Deathling Spellsinger'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: true,
    },
  resistance:
    {
      physical: 100,
      earth: 110,
      fire: 0,
      death: 90,
      energy: 110,
      holy: 100,
      ice: 0,
      healing: 100
    },
  locations:
    [
      searchForLocation('Deepling Ancestorial Grounds'),
      searchForLocation('Sunken Temple'),
    ],
  hitpoints: 7200,
  experience: 6400,
  speed: 155,
  armor: 72,
  charmPoints: 50,
};

const chicken = monsterArray[45] =
{
  name: 'Chicken',
  category: birds,
  loot: null,
  difficulty: 'Trivial',
  occurence: 'common',
  description: searchForDescription('Chicken'),
  fightStyle:
    {
      melee: false,
      ranged: false,
      spells: false,
    },
  resistance:
    {
      physical: 100,
      earth: 100,
      fire: 100,
      death: 100,
      energy: 100,
      holy: 100,
      ice: 100,
      healing: 100
    },
  locations:
    [
      searchForLocation('Sabrehaven'),
      searchForLocation('Rookgard'),
      searchForLocation("The McRonald's Farm"),
      searchForLocation('Northport'),
      searchForLocation('Fibula'),
      searchForLocation('Carlin'),
      searchForLocation('Greenshore'),
      searchForLocation('Krimhorn'),
      searchForLocation('Orc Fortress'),
      searchForLocation('Factory Quarter'),
      searchForLocation('Edron Farm'),
    ],
  hitpoints: 15,
  experience: 0,
  speed: 64,
  armor: 1,
  charmPoints: 5,
};

const flamingo = monsterArray[46] =
{
  name: 'Flamingo',
  category: birds,
  loot: null,
  difficulty: 'Trivial',
  occurence: 'common',
  description: searchForDescription('Flamingo'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: false,
    },
  resistance:
    {
      physical: 100,
      earth: 100,
      fire: 100,
      death: 100,
      energy: 100,
      holy: 100,
      ice: 100,
      healing: 100
    },
  locations:
    [
      searchForLocation('Tiquanda'),
      searchForLocation('Shattered Isles'),
      searchForLocation('Gardens of Night'),
    ],
  hitpoints: 25,
  experience: 0,
  speed: 84,
  armor: 1,
  charmPoints: 5,
};

const parrot = monsterArray[47] =
{
  name: 'Parrot',
  category: birds,
  loot: null,
  difficulty: 'Trivial',
  occurence: 'common',
  description: searchForDescription('Flamingo'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: false,
    },
  resistance:
    {
      physical: 100,
      earth: 100,
      fire: 100,
      death: 100,
      energy: 100,
      holy: 100,
      ice: 100,
      healing: 100
    },
  locations:
    [
      searchForLocation('Tiquanda'),
      searchForLocation('Liberty Bay'),
      searchForLocation('The Isles'),
      searchForLocation('Meriana'),
    ],
  hitpoints: 25,
  experience: 0,
  speed: 160,
  armor: 2,
  charmPoints: 5,
};

const terrorBird = monsterArray[48] =
{
  name: 'Terror Bird',
  category: birds,
  loot: null,
  difficulty: 'Easy',
  occurence: 'common',
  description: searchForDescription('Terror Bird'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: false,
    },
  resistance:
    {
      physical: 100,
      earth: 110,
      fire: 110,
      death: 110,
      energy: 80,
      holy: 100,
      ice: 80,
      healing: 100
    },
  locations:
    [
      searchForLocation('Port Hope'),
      searchForLocation('Arena Quarter'),
      searchForLocation('Zao Steppes'),
    ],
  hitpoints: 300,
  experience: 150,
  speed: 106,
  armor: 13,
  charmPoints: 15,
};

const seagull = monsterArray[49] =
{
  name: 'Seagull',
  category: birds,
  loot: null,
  difficulty: 'Trivial',
  occurence: 'common',
  description: searchForDescription('Seagull'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: false,
    },
  resistance:
    {
      physical: 100,
      earth: 110,
      fire: 110,
      death: 110,
      energy: 80,
      holy: 100,
      ice: 80,
      healing: 100
    },
  locations:
    [
      searchForLocation('Shattered Isles'),
      searchForLocation('Venore'),
      searchForLocation('Thais'),
      searchForLocation('Liberty Bay'),
      searchForLocation('Port Hope'),
      searchForLocation('Fibula'),
      searchForLocation('Drefia'),
      searchForLocation('Factory Quarter'),
      searchForLocation('Orc Fortress'),
      searchForLocation('Rookgard Premium Zone'),
      searchForLocation("Ab'Dendriel Elf Caves"),
      searchForLocation('Northern Coast of Tibia'),
    ],
  hitpoints: 25,
  experience: 160,
  speed: 160,
  armor: 2,
  charmPoints: 5,
}

const penguin = monsterArray[50] =
{
  name: 'Penguin',
  category: birds,
  loot: null,
  difficulty: 'Trivial',
  occurence: 'common',
  description: searchForDescription('Penguin'),
  fightStyle:
    {
      melee: true,
      ranged: false,
      spells: false,
    },
  resistance:
    {
      physical: 100,
      earth: 100,
      fire: 100,
      death: 100,
      energy: 110,
      holy: 100,
      ice: 80,
      healing: 100
    },
  locations:
    [
      searchForLocation('Formorgar Glacier'),
      searchForLocation('Nibelor'),
      searchForLocation('Helheim'),
      searchForLocation('Grimlund'),
      searchForLocation('Hrodmir'),
      searchForLocation('Chyllfroest'),
    ],
  hitpoints: 33,
  experience: 1,
  speed: 58,
  armor: 2,
  charmPoints: 5,
}

const berserkerChicken = monsterArray[51] =
{
  name: 'Berserker Chicken',
  category: birds,
  loot: null,
  difficulty: 'Medium',
  occurence: 'uncommon',
  description: searchForDescription('Berserker Chicken'),
  fightStyle:
  {
    melee: true,
    ranged: false,
    spells: true,
  },
resistance:
  {
    physical: 110,
    earth: 90,
    fire: 90,
    death: 90,
    energy: 90,
    holy: 90,
    ice: 90,
    healing: 100
  },
locations:
  [
    searchForLocation('Isle of Evil'),
  ],
hitpoints: 465,
experience: 220,
speed: 83,
armor: 12,
charmPoints: 25,
};

const demonParrot = monsterArray[52] =
{
  name: 'Demon Parrot',
  category: birds,
  loot: null,
  difficulty: 'Medium',
  occurence: 'uncommon',
  description: searchForDescription('Demon Parrot'),
  fightStyle:
  {
    melee: true,
    ranged: false,
    spells: true,
  },
resistance:
  {
    physical: 100,
    earth: 100,
    fire: 100,
    death: 100,
    energy: 100,
    holy: 100,
    ice: 100,
    healing: 100
  },
locations:
  [
    searchForLocation('Isle of Evil'),
  ],
hitpoints: 360,
experience: 225,
speed: 160,
armor: 18,
charmPoints: 25,
};

const marshStalker = monsterArray[53] =
{
  name: 'Marsh Stalker',
  category: birds,
  loot: null,
  difficulty: 'Easy',
  occurence: 'common',
  description: searchForDescription('Marsh Stalker'),
  fightStyle:
  {
    melee: true,
    ranged: false,
    spells: true,
  },
resistance:
  {
    physical: 100,
    earth: 105,
    fire: 100,
    death: 100,
    energy: 100,
    holy: 100,
    ice: 95,
    healing: 100
  },
locations:
  [
    searchForLocation('Venore Swamp Area'),
    searchForLocation('Venore Salamander Cave'),
    searchForLocation('Dryad Gardens'),
  ],
hitpoints: 100,
experience: 50,
speed: 75,
armor: 3,
charmPoints: 15,
};

const pigeon = monsterArray[54] =
{
  name: 'Pigeon',
  category: birds,
  loot: null,
  difficulty: 'Harmless',
  occurence: 'uncommon',
  description: searchForDescription('Pigeon'),
  fightStyle:
  {
    melee: false,
    ranged: false,
    spells: false,
  },
resistance:
  {
    physical: 100,
    earth: 110,
    fire: 100,
    death: 110,
    energy: 100,
    holy: 100,
    ice: 100,
    healing: 100
  },
locations:
  [
    searchForLocation('Streets of Venore'),
    searchForLocation('Gardens of Night'),
  ],
hitpoints: 30,
experience: 0,
speed: 65,
armor: 1,
charmPoints: 1,
};

const caveParrot = monsterArray[55] =
{
  name: 'Cave Parrot',
  category: birds,
  loot: null,
  difficulty: 'Trivial',
  occurence: 'common',
  description: searchForDescription('Cave Parrot'),
  fightStyle:
  {
    melee: true,
    ranged: false,
    spells: false,
  },
resistance:
  {
    physical: 100,
    earth: 100,
    fire: 100,
    death: 100,
    energy: 100,
    holy: 100,
    ice: 100,
    healing: 100
  },
locations:
  [
    searchForLocation('Desecrated Glade'),
  ],
hitpoints: 30,
experience: 0,
speed: 160,
armor: 2,
charmPoints: 5,
};

const agresticChicken = monsterArray[56] =
{
  name: 'Agrestic Chicken',
  category: birds,
  loot: null,
  difficulty: 'Trivial',
  occurence: 'common',
  description: searchForDescription('Agrestic Chicken'),
  fightStyle:
  {
    melee: true,
    ranged: false,
    spells: false,
  },
resistance:
  {
    physical: 100,
    earth: 100,
    fire: 100,
    death: 100,
    energy: 100,
    holy: 100,
    ice: 100,
    healing: 100
  },
locations:
  [
    searchForLocation('Bounac'),
    searchForLocation('Order of The Lion Settlement'),
  ],
hitpoints: 15,
experience: 0,
speed: 64,
armor: 1,
charmPoints: 5,
};

const jungleMoa = monsterArray[57] =
{
  name: 'Jungle Moa',
  category: birds,
  loot: null,
  difficulty: 'Challenging',
  occurence: 'common',
  description: searchForDescription('Jungle Moa'),
  fightStyle:
  {
    melee: true,
    ranged: false,
    spells: true,
  },
resistance:
  {
    physical: 100,
    earth: 100,
    fire: 100,
    death: 100,
    energy: 100,
    holy: 100,
    ice: 100,
    healing: 100
  },
locations:
  [
    searchForLocation('Marapur'),
  ],
hitpoints: 1300,
experience: 1200,
speed: 105,
armor: 30,
charmPoints: 100,
}

const headpecker = monsterArray[58] =
{
  name: 'Headpecker',
  category: birds,
  loot: null,
  difficulty: 'Challenging',
  occurence: 'common',
  description: searchForDescription('Headpecker'),
  fightStyle:
  {
    melee: true,
    ranged: false,
    spells: true,
  },
resistance:
  {
    physical: 110,
    earth: 90,
    fire: 110,
    death: 110,
    energy: 90,
    holy: 0,
    ice: 110,
    healing: 100
  },
locations:
  [
    searchForLocation('Crystal Enigma'),
  ],
hitpoints: 14700,
experience: 13950,
speed: 217,
armor: 68,
charmPoints: 100,
};


const direPenguin = monsterArray[59] =
{
  name: 'Dire Penguin',
  category: birds,
  loot: null,
  difficulty: 'Easy',
  occurence: 'very rare',
  description: searchForDescription('Dire Penguin'),
  fightStyle:
  {
    melee: true,
    ranged: false,
    spells: true,
  },
resistance:
  {
    physical: 100,
    earth: 50,
    fire: 50,
    death: 100,
    energy: 105,
    holy: 0,
    ice: 70,
    healing: 100
  },
locations:
  [
    searchForLocation('Formorgar Glacier'),
    searchForLocation('Helheim'),
    searchForLocation('Tyrsung'),
    searchForLocation('Hrodmir'),
    searchForLocation('Chyllfroest'),
  ],
hitpoints: 173,
experience: 119,
speed: 87,
armor: 16,
charmPoints: 30,
};

const stoneGolem = monsterArray[60] =
{
  name: 'Stone Golem',
  category: constructs,
  loot: null,
  difficulty: 'Easy',
  occurence: 'common',
  description: searchForDescription('Stone Golem'),
  fightStyle:
  {
    melee: true,
    ranged: false,
    spells: false,
  },
resistance:
  {
    physical: 90,
    earth: 0,
    fire: 80,
    death: 80,
    energy: 85,
    holy: 0,
    ice: 110,
    healing: 100
  },
locations:
  [
    searchForLocation('Maze of Lost Souls'),
    searchForLocation("Ashta'daramai"),
    searchForLocation('Formorgar Mines'),
    searchForLocation('Hrodmir Caves'),
    searchForLocation('Dark Cathedral'),
    searchForLocation('Demona'),
    searchForLocation('Goroma'),
    searchForLocation('Tarpit Tomb'),
    searchForLocation('Peninsula Tomb'),
    searchForLocation('Deeper Banuta'),
    searchForLocation('Forbidden Lands'),
    searchForLocation('Beregar Mines'),
    searchForLocation('Farmine Mines'),
    searchForLocation('Drillworm Caves'),
    searchForLocation('Orc Fortress'),
    searchForLocation('Medusa Tower'),
    searchForLocation('Hero Cave'),
  ],
hitpoints: 270,
experience: 160,
speed: 90,
armor: 30,
charmPoints: 15,
};

const iceGolem = monsterArray[61] =
{
  name: 'Ice Golem',
  category: constructs,
  loot: null,
  difficulty: 'Medium',
  occurence: 'common',
  description: searchForDescription('Ice Golem'),
  fightStyle:
  {
    melee: true,
    ranged: false,
    spells: true,
  },
resistance:
  {
    physical: 80,
    earth: 100,
    fire: 0,
    death: 0,
    energy: 120,
    holy: 0,
    ice: 0,
    healing: 100
  },
locations:
  [
    searchForLocation('Nibelor Ice Cave'),
    searchForLocation('Ice Witch Caves'),
    searchForLocation('Formorgar Mines'),
    searchForLocation('Formorgar Glacier'),
    searchForLocation('Deeper Banuta'),
    searchForLocation('Crystal Caves'),
    searchForLocation('Chyllfroest'),
  ],
hitpoints: 385,
experience: 295,
speed: 95,
armor: 47,
charmPoints: 25,
};

const workerGolem = monsterArray[62] =
{
  name: 'Worker Golem',
  category: constructs,
  loot: null,
  difficulty: 'Medium',
  occurence: 'common',
  description: searchForDescription('Worker Golem'),
  fightStyle:
  {
    melee: true,
    ranged: false,
    spells: true,
  },
resistance:
  {
    physical: 90,
    earth: 50,
    fire: 100,
    death: 90,
    energy: 105,
    holy: 50,
    ice: 90,
    healing: 100
  },
locations:
  [
    searchForLocation('Factory Quarter'),
  ],
hitpoints: 1470,
experience: 1250,
speed: 80,
armor: 35,
charmPoints: 25,
};

const damagedWorkerGolem = monsterArray[63] =
{
  name: 'Damaged Worker Golem',
  category: constructs,
  loot: null,
  difficulty: 'Easy',
  occurence: 'common',
  description: searchForDescription('Damaged Worker Golem'),
  fightStyle:
  {
    melee: true,
    ranged: false,
    spells: true,
  },
resistance:
  {
    physical: 90,
    earth: 50,
    fire: 100,
    death: 90,
    energy: 105,
    holy: 50,
    ice: 90,
    healing: 100
  },
locations:
  [
    searchForLocation('Factory Quarter'),
  ],
hitpoints: 260,
experience: 95,
speed: 75,
armor: 16,
charmPoints: 15,
};

const warGolem = monsterArray[64] =
{
  name: 'War Golem',
  category: constructs,
  loot: null,
  difficulty: 'Medium',
  occurence: 'common',
  description: searchForDescription('War Golem'),
  fightStyle:
  {
    melee: true,
    ranged: false,
    spells: true,
  },
resistance:
  {
    physical: 90,
    earth: 50,
    fire: 85,
    death: 80,
    energy: 95,
    holy: 50,
    ice: 70,
    healing: 100
  },
locations:
  [
    searchForLocation('Factory Quarter'),
    searchForLocation('Fenrock'),
    searchForLocation('Yalahar Library'),
    searchForLocation('Azerus Room'),
    searchForLocation('Underground Glooth Factory'),
    searchForLocation("Jaccus Maxxen's Dungeon "),
  ],
hitpoints: 4300,
experience: 2310,
speed: 160,
armor: 35,
charmPoints: 25,
};

const eternalGuardian = monsterArray[65] =
{
  name: 'Eternal Guardian',
  category: constructs,
  loot: null,
  difficulty: 'Medium',
  occurence: 'common',
  description: searchForDescription('Eternal Guardian'),
  fightStyle:
  {
    melee: true,
    ranged: false,
    spells: false,
  },
resistance:
  {
    physical: 80,
    earth: 0,
    fire: 30,
    death: 80,
    energy: 90,
    holy: 50,
    ice: 90,
    healing: 100
  },
locations:
  [
    searchForLocation('Muggy Plains'),
    searchForLocation('Deeper Banuta'),
  ],
hitpoints: 2500,
experience: 1800,
speed: 102,
armor: 62,
charmPoints: 25,
};

const ironServant = monsterArray[66] =
{
  name: 'Iron Servant',
  category: constructs,
  loot: null,
  difficulty: 'Medium',
  occurence: 'very rare',
  description: searchForDescription('Iron Servant'),
  fightStyle:
  {
    melee: true,
    ranged: false,
    spells: true,
  },
resistance:
  {
    physical: 100,
    earth: 110,
    fire: 75,
    death: 110,
    energy: 75,
    holy: 80,
    ice: 100,
    healing: 100
  },
locations:
  [
    searchForLocation("Edron Mad Mage's Tower"),
  ],
hitpoints: 350,
experience: 210,
speed: 95,
armor: 17,
charmPoints: 30,
};

const goldenServant = monsterArray[67] =
{
  name: 'Golden Servant',
  category: constructs,
  loot: null,
  difficulty: 'Medium',
  occurence: 'very rare',
  description: searchForDescription('Golden Servant'),
  fightStyle:
  {
    melee: true,
    ranged: false,
    spells: true,
  },
resistance:
  {
    physical: 100,
    earth: 20,
    fire: 85,
    death: 110,
    energy: 75,
    holy: 0,
    ice: 105,
    healing: 100
  },
locations:
  [
    searchForLocation("Edron Mad Mage's Tower"),
  ],
hitpoints: 550,
experience: 450,
speed: 105,
armor: 29,
charmPoints: 50,
};

const diamondServant = monsterArray[68] =
{
  name: 'Diamond Servant',
  category: constructs,
  loot: null,
  difficulty: 'Medium',
  occurence: 'very rare',
  description: searchForDescription('Diamond Servant'),
  fightStyle:
  {
    melee: true,
    ranged: false,
    spells: true,
  },
resistance:
  {
    physical: 100,
    earth: 25,
    fire: 90,
    death: 100,
    energy: 0,
    holy: 115,
    ice: 100,
    healing: 100
  },
locations:
  [
    searchForLocation("Edron Mad Mage's Tower"),
  ],
hitpoints: 1000,
experience: 700,
speed: 86,
armor: 25,
charmPoints: 50,
};

const sandstoneScorpion = monsterArray[69] =
{
  name: 'Sandstone Scorpion',
  category: constructs,
  loot: null,
  difficulty: 'Medium',
  occurence: 'rare',
  description: searchForDescription('Sandstone Scorpion'),
  fightStyle:
  {
    melee: true,
    ranged: false,
    spells: true,
  },
resistance:
  {
    physical: 100,
    earth: 10,
    fire: 60,
    death: 100,
    energy: 110,
    holy: 110,
    ice: 110,
    healing: 100
  },
locations:
  [
    searchForLocation("Horestis Tomb"),
  ],
hitpoints: 900,
experience: 680,
speed: 110,
armor: 42,
charmPoints: 25,
};

const clayGuardian = monsterArray[70] =
{
  name: 'Clay Guardian',
  category: constructs,
  loot: null,
  difficulty: 'Medium',
  occurence: 'common',
  description: searchForDescription('Clay Guardian'),
  fightStyle:
  {
    melee: true,
    ranged: false,
    spells: true,
  },
resistance:
  {
    physical: 75,
    earth: 0,
    fire: 100,
    death: 60,
    energy: 70,
    holy: 110,
    ice: 65,
    healing: 100
  },
locations:
  [
    searchForLocation("Horestis Tomb"),
    searchForLocation("Middle Spike"),
    searchForLocation("Medusa Tower"),
  ],
hitpoints: 625,
experience: 400,
speed: 115,
armor: 42,
charmPoints: 25,
};

const enragedCrystalGolem = monsterArray[71] =
{
  name: 'Enraged Crystal Golem',
  category: constructs,
  loot: null,
  difficulty: 'Medium',
  occurence: 'common',
  description: searchForDescription('Enraged Crystal Golem'),
  fightStyle:
  {
    melee: true,
    ranged: false,
    spells: true,
  },
resistance:
  {
    physical: 80,
    earth: 100,
    fire: 0,
    death: 100,
    energy: 100,
    holy: 100,
    ice: 0,
    healing: 100
  },
locations:
  [
    searchForLocation("Golem Workshop"),
  ],
hitpoints: 700,
experience: 555,
speed: 120,
armor: 38,
charmPoints: 25,
};

const damagedCrystalGolem = monsterArray[72] =
{
  name: 'Damaged Crystal Golem',
  category: constructs,
  loot: null,
  difficulty: 'Easy',
  occurence: 'uncommon',
  description: searchForDescription('Damaged Crystal Golem'),
  fightStyle:
  {
    melee: true,
    ranged: false,
    spells: true,
  },
resistance:
  {
    physical: 80,
    earth: 100,
    fire: 0,
    death: 100,
    energy: 100,
    holy: 100,
    ice: 0,
    healing: 100
  },
locations:
  [
    searchForLocation("Golem Workshop"),
  ],
hitpoints: 500,
experience: 0,
speed: 134,
armor: 30,
charmPoints: 15,
};

const stoneDevourer = monsterArray[73] =
{
  name: 'Stone Devourer',
  category: constructs,
  loot: null,
  difficulty: 'Hard',
  occurence: 'uncommon',
  description: searchForDescription('Stone Devourer'),
  fightStyle:
  {
    melee: true,
    ranged: false,
    spells: true,
  },
resistance:
  {
    physical: 90,
    earth: 0,
    fire: 0,
    death: 70,
    energy: 70,
    holy: 70,
    ice: 0,
    healing: 100
  },
locations:
  [
    searchForLocation("Warzone 1"),
  ],
hitpoints: 4200,
experience: 2900,
speed: 150,
armor: 75,
charmPoints: 50,
};

const weeper = monsterArray[74] =
{
  name: 'Weeper',
  category: constructs,
  loot: null,
  difficulty: 'Hard',
  occurence: 'uncommon',
  description: searchForDescription('Weeper'),
  fightStyle:
  {
    melee: true,
    ranged: false,
    spells: true,
  },
resistance:
  {
    physical: 105,
    earth: 0,
    fire: 0,
    death: 70,
    energy: 100,
    holy: 100,
    ice: 105,
    healing: 100
  },
locations:
  [
    searchForLocation("Warzone 2"),
  ],
hitpoints: 6800,
experience: 4800,
speed: 170,
armor: 76,
charmPoints: 50,
};

const orewalker = monsterArray[75] =
{
  name: 'Orewalker',
  category: constructs,
  loot: null,
  difficulty: 'Hard',
  occurence: 'uncommon',
  description: searchForDescription('Orewalker'),
  fightStyle:
  {
    melee: true,
    ranged: false,
    spells: true,
  },
resistance:
  {
    physical: 75,
    earth: 0,
    fire: 35,
    death: 75,
    energy: 105,
    holy: 100,
    ice: 95,
    healing: 100
  },
locations:
  [
    searchForLocation("Warzone 3"),
  ],
hitpoints: 7200,
experience: 4800,
speed: 190,
armor: 79,
charmPoints: 50,
};

const lavaGolem = monsterArray[76] =
{
  name: 'Lava Golem',
  category: constructs,
  loot: null,
  difficulty: 'Hard',
  occurence: 'uncommon',
  description: searchForDescription('Lava Golem'),
  fightStyle:
  {
    melee: true,
    ranged: false,
    spells: true,
  },
resistance:
  {
    physical: 70,
    earth: 0,
    fire: 0,
    death: 65,
    energy: 70,
    holy: 100,
    ice: 105,
    healing: 100
  },
locations:
  [
    searchForLocation("Warzone 2"),
  ],
hitpoints: 9000,
experience: 6200,
speed: 210,
armor: 84,
charmPoints: 50,
};

const magmaCrawler = monsterArray[77] =
{
  name: 'Magma Crawler',
  category: constructs,
  loot: null,
  difficulty: 'Hard',
  occurence: 'common',
  description: searchForDescription('Magma Crawler'),
  fightStyle:
  {
    melee: false,
    ranged: true,
    spells: true,
  },
resistance:
  {
    physical: 95,
    earth: 0,
    fire: 0,
    death: 75,
    energy: 90,
    holy: 100,
    ice: 90,
    healing: 100
  },
locations:
  [
    searchForLocation("Warzone 2"),
  ],
hitpoints: 4800,
experience: 2700,
speed: 230,
armor: 84,
charmPoints: 50,
};

const infectedWeeper= monsterArray[78] =
{
  name: 'Infected Weeper',
  category: constructs,
  loot: null,
  difficulty: 'Hard',
  occurence: 'uncommon',
  description: searchForDescription('Infected Weeper'),
  fightStyle:
  {
    melee: true,
    ranged: false,
    spells: true,
  },
resistance:
  {
    physical: 50,
    earth: 0,
    fire: 0,
    death: 70,
    energy: 75,
    holy: 100,
    ice: 110,
    healing: 100
  },
locations:
  [
    searchForLocation("Warzone 2"),
  ],
hitpoints: 3000,
experience: 1200,
speed: 170,
armor: 76,
charmPoints: 50,
};

const  gloothGolem = monsterArray[79] =
{
  name: 'Glooth Golem',
  category: constructs,
  loot: null,
  difficulty: 'Medium',
  occurence: 'common',
  description: searchForDescription('Glooth Golem'),
  fightStyle:
  {
    melee: true,
    ranged: false,
    spells: true,
  },
resistance:
  {
    physical: 95,
    earth: 0,
    fire: 105,
    death: 70,
    energy: 95,
    holy: 85,
    ice: 100,
    healing: 100
  },
locations:
  [
    searchForLocation('Glooth Factory'),
    searchForLocation('Underground Glooth Factory'),
    searchForLocation('Rathleton Sewers'),
    searchForLocation("Jaccus Maxxen's Dungeon"),
    searchForLocation('Oramond Dungeon')
  ],
hitpoints: 2700,
experience: 1606,
speed: 130,
armor: 43,
charmPoints: 25,
};

const metalGargoyle = monsterArray[80] =
{
  name: 'Metal Gargoyle',
  category: constructs,
  loot: null,
  difficulty: 'Medium',
  occurence: 'common',
  description: searchForDescription('Metal Gargoyle'),
  fightStyle:
  {
    melee: true,
    ranged: false,
    spells: true,
  },
resistance:
  {
    physical: 85,
    earth: 0,
    fire: 90,
    death: 20,
    energy: 110,
    holy: 100,
    ice: 105,
    healing: 100
  },
locations:
  [
    searchForLocation('Workshop Quarter'),
    searchForLocation('Glooth Factory'),
    searchForLocation('Underground Glooth Factory'),
    searchForLocation('Abandonded Sewers'),
    searchForLocation('Oramond Dungeon'),
    searchForLocation("Jaccus Maxxen's Dungeon"),
  ],
hitpoints: 2100,
experience: 1278,
speed: 95,
armor: 60,
charmPoints: 25,
};

const rustheapGolem = monsterArray[81] =
{
  name: 'Rustheap Golem',
  category: constructs,
  loot: null,
  difficulty: 'Medium',
  occurence: 'common',
  description: searchForDescription('Rustheap Golem'),
  fightStyle:
  {
    melee: true,
    ranged: false,
    spells: true,
  },
resistance:
  {
    physical: 105,
    earth: 100,
    fire: 30,
    death: 90,
    energy: 105,
    holy: 100,
    ice: 100,
    healing: 100
  },
locations:
  [
    searchForLocation('Workshop Quarter'),
    searchForLocation('Glooth Factory'),
    searchForLocation('Underground Glooth Factory'),
    searchForLocation('Oramond Dungeon'),
    searchForLocation("Jaccus Maxxen's Dungeon"),
  ],
hitpoints: 2800,
experience: 2100,
speed: 125,
armor: 46,
charmPoints: 25,
};

const walker = monsterArray[82] =
{
  name: 'Walker',
  category: constructs,
  loot: null,
  difficulty: 'Medium',
  occurence: 'uncommon',
  description: searchForDescription('Walker'),
  fightStyle:
  {
    melee: true,
    ranged: false,
    spells: true,
  },
resistance:
  {
    physical: 95,
    earth: 50,
    fire: 65,
    death: 85,
    energy: 100,
    holy: 50,
    ice: 95,
    healing: 100
  },
locations:
  [
    searchForLocation('Glooth Factory'),
    searchForLocation('Underground Glooth Factory'),
    searchForLocation('Oramond Dungeon'),
    searchForLocation("Rathleton Sewers"),
  ],
hitpoints: 3000,
experience: 2200,
speed: 150,
armor: 47,
charmPoints: 25,
};

const ironServantReplica = monsterArray[83] =
{
  name: 'Iron Servant Replica',
  category: constructs,
  loot: null,
  difficulty: 'Medium',
  occurence: 'common',
  description: searchForDescription('Iron Servant Replica'),
  fightStyle:
  {
    melee: true,
    ranged: false,
    spells: true,
  },
resistance:
  {
    physical: 100,
    earth: 110,
    fire: 75,
    death: 110,
    energy: 75,
    holy: 80,
    ice: 100,
    healing: 100
  },
locations:
  [
    searchForLocation("Replica Dungeon"),
  ],
hitpoints: 1000,
experience: 210,
speed: 95,
armor: 17,
charmPoints: 30,
};

const goldenServantReplica = monsterArray[84] =
{
  name: 'Golden Servant Replica',
  category: constructs,
  loot: null,
  difficulty: 'Medium',
  occurence: 'rare',
  description: searchForDescription('Golden Servant Replica'),
  fightStyle:
  {
    melee: true,
    ranged: false,
    spells: true,
  },
resistance:
  {
    physical: 100,
    earth: 20,
    fire: 85,
    death: 110,
    energy: 75,
    holy: 0,
    ice: 105,
    healing: 100
  },
locations:
  [
    searchForLocation("Replica Dungeon"),
  ],
hitpoints: 2000,
experience: 450,
speed: 105,
armor: 29,
charmPoints: 25,
};

const diamondServantReplica = monsterArray[85] =
{
  name: 'Diamond Servant Replica',
  category: constructs,
  loot: null,
  difficulty: 'Medium',
  occurence: 'rare',
  description: searchForDescription('Diamond Servant Replica'),
  fightStyle:
  {
    melee: true,
    ranged: false,
    spells: true,
  },
resistance:
  {
    physical: 100,
    earth: 25,
    fire: 90,
    death: 100,
    energy: 0,
    holy: 115,
    ice: 100,
    healing: 100
  },
locations:
  [
    searchForLocation("Replica Dungeon"),
  ],
hitpoints: 2000,
experience: 700,
speed: 86,
armor: 25,
charmPoints: 50,
};

const bitingBook = monsterArray[86] =
{
  name: 'Biting Book',
  category: constructs,
  loot: null,
  difficulty: 'Hard',
  occurence: 'common',
  description: searchForDescription('Biting Book'),
  fightStyle:
  {
    melee: true,
    ranged: false,
    spells: true,
  },
resistance:
  {
    physical: 50,
    earth: 100,
    fire: 100,
    death: 100,
    energy: 100,
    holy: 100,
    ice: 100,
    healing: 100
  },
locations:
  [
    searchForLocation("Secret Library"),
    searchForLocation("Issavi prison"),
  ],
hitpoints: 6500,
experience: 9350,
speed: 240,
armor: 76,
charmPoints: 50,
};


const animatedSnowman = monsterArray[86] =
{
  name: 'Animated Snowman',
  category: constructs,
  loot: null,
  difficulty: 'Medium',
  occurence: 'rare',
  description: searchForDescription('Animated Snowman'),
  fightStyle:
  {
    melee: false,
    ranged: true,
    spells: true,
  },
resistance:
  {
    physical: 100,
    earth: 100,
    fire: 120,
    death: 100,
    energy: 100,
    holy: 100,
    ice: 80,
    healing: 100
  },
locations:
  [
    searchForLocation("Percht Island"),
  ],
hitpoints: 450,
experience: 400,
speed: 115,
armor: 25,
charmPoints: 25,
};

const rottenGolem = monsterArray[87] =
{
  name: 'Rotten Golem',
  category: constructs,
  loot: null,
  difficulty: 'Challenging',
  occurence: 'common',
  description: searchForDescription('Rotten Golem'),
  fightStyle:
  {
    melee: true,
    ranged: false,
    spells: true,
  },
resistance:
  {
    physical: 80,
    earth: 60,
    fire: 125,
    death: 120,
    energy: 115,
    holy: 50,
    ice: 100,
    healing: 100
  },
locations:
  [
    searchForLocation("Rotten Wasteland"),
  ],
hitpoints: 2000,
experience: 700,
speed: 86,
armor: 25,
charmPoints: 50,
};

const cakeGolem = monsterArray[88] =
{
  name: 'Cake Golem',
  category: constructs,
  loot: null,
  difficulty: 'Easy',
  occurence: 'very rare',
  description: searchForDescription('Cake Golem'),
  fightStyle:
  {
    melee: true,
    ranged: false,
    spells: true,
  },
resistance:
  {
    physical: 80,
    earth: 5,
    fire: 15,
    death: 15,
    energy: 10,
    holy: 5,
    ice: 5,
    healing: 100
  },
locations:
  [
    searchForLocation('Thais'),
    searchForLocation('Carlin'),
    searchForLocation('Edron'),
    searchForLocation('Darashia'),
    searchForLocation('Liberty Bay'),
  ],
hitpoints: 444,
experience: 100,
speed: 95,
armor: 8,
charmPoints: 30,
};

const shriekingCrystal = monsterArray[89] =
{
  name: "Shrieking Cry-Stal",
  category: constructs,
  loot: null,
  difficulty: 'Challenging',
  occurence: 'common',
  description: searchForDescription('Shrieking Cry-Stal'),
  fightStyle:
  {
    melee: true,
    ranged: false,
    spells: true,
  },
resistance:
  {
    physical: 80,
    earth: 105,
    fire: 95,
    death: 100,
    energy: 90,
    holy: 0,
    ice: 95,
    healing: 100
  },
locations:
  [
    searchForLocation('Crystal Enigma'),
  ],
hitpoints: 18700,
experience: 15730,
speed: 207,
armor: 95,
charmPoints: 100,
};

const fireDevil = monsterArray[90] =
{
  name: "Fire Devil",
  category: demon,
  loot: null,
  difficulty: 'Easy',
  occurence: 'common',
  description: searchForDescription('Fire Devil'),
  fightStyle:
  {
    melee: false,
    ranged: true,
    spells: true,
  },
resistance:
  {
    physical: 90,
    earth: 80,
    fire: 0,
    death: 80,
    energy: 70,
    holy: 110,
    ice: 120,
    healing: 100
  },
locations:
  [
    searchForLocation('Desert Dungeon'),
    searchForLocation('Ancient Temple'),
    searchForLocation('Magician Tower'),
    searchForLocation('Shadow Tomb'),
    searchForLocation('Ghostlands'),
    searchForLocation('Goroma'),
    searchForLocation('Plains of Havoc'),
    searchForLocation('Spike Sword Quest Area'),
  ],
hitpoints: 200,
experience: 145,
speed: 90,
armor: 13,
charmPoints: 15,
};

//put it on WIP at this entry
const darkTorturer = monsterArray[91] =
{
  name: "Dark Torturer",
  category: demon,
  loot: null,
  difficulty: 'Hard',
  occurence: 'common',
  description: searchForDescription('Dark Torturer'),
  fightStyle:
  {
    melee: true,
    ranged: false,
    spells: true,
  },
resistance:
  {
    physical: 100,
    earth: 10,
    fire: 0,
    death: 90,
    energy: 70,
    holy: 110,
    ice: 110,
    healing: 100
  },
locations:
  [
    searchForLocation('Desert Dungeon'), ///here
    searchForLocation('Ancient Temple'),
    searchForLocation('Magician Tower'),
    searchForLocation('Shadow Tomb'),
    searchForLocation('Ghostlands'),
    searchForLocation('Goroma'),
    searchForLocation('Plains of Havoc'),
    searchForLocation('Spike Sword Quest Area'),
  ],
hitpoints: 200,
experience: 145,
speed: 90,
armor: 13,
charmPoints: 15,
};
/*Reminder
{
  name: string,
  category: Category,
  loot: Item | null,
  difficulty: Difficulty,
  occurance: Occurance,
  description: string,
  fightStyle: fightstyle,
  resistance: Resistances;
  locations: Locations;
  hitpoints: number;
  experience: number;
  speed: number;
  armor: number;
  charmPoints: number;
}

Resistance:
{
  physical: number;
  earth: number;
  fire: number;
  death: number;
  energy: number;
  holy: number;
  ice: number;
  healing: number;
}
*/
