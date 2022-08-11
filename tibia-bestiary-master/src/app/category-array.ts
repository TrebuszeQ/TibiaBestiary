import { Category } from "./category";


const amphibicDescription: string = '';
const aquaticDescription: string = '';
const birdDescription: string = '';
const constructDescription: string = '';
const demonDescription: string = '';
const dragonDescription: string = '';
const elementalDescription: string = '';
const extraDimensionalDescription: string = '';
const feyDescription: string = '';
const giantsDescription: string = '';
const humanDescription: string = '';
const humanoidDescription: string = '';
const lycanthropeDescription: string = '';
const magicalDescription: string = '';
const mammalDescription: string = '';
const plantDescription: string = '';
const reptileDescription: string = '';
const slimeDescription: string = '';
const undeadDescription: string = '';
const verminDescription: string = '';

export const categoryArray: Category[] =
[
  {
    categoryName: 'Amphibic',
    categorySize: 11,
    path: 'amphibic',
    imageSrc: '/assets/images/salamander.gif',
    futuredName: 'Salamander',
    description: amphibicDescription
  },
  {
    categoryName: 'Aquatic',
    categorySize: 37,
    path: 'aquatic',
    imageSrc: '/assets/images/deeplingwarrior.gif',
    futuredName: 'Deepling Warrior',
    description: aquaticDescription
  },
  {
    categoryName: 'Bird',
    categorySize: 15,
    path: 'bird',
    imageSrc: '/assets/images/penguin.gif',
    futuredName: 'Penguin',
    description: birdDescription
  },
  {
    categoryName: 'Construct',
    categorySize: 31,
    path: 'construct',
    imageSrc: '/assets/images/wargolem.gif',
    futuredName: 'War Golem',
    description: constructDescription
  },
  {
    categoryName: 'Demon',
    categorySize: 36,
    path: 'demon',
    imageSrc: '/assets/images/hellflayer.gif',
    futuredName: 'Hellflayer',
    description: demonDescription
  },
  {
    categoryName: 'Dragon',
    categorySize: 17,
    path: 'dragon',
    imageSrc: '/assets/images/ghastlydragon.gif',
    futuredName: 'Ghastly Dragon',
    description: dragonDescription
  },
  {
    categoryName: 'Elemental',
    categorySize: 19,
    path: 'elemental',
    imageSrc: '/assets/images/cliffstrider.gif',
    futuredName: 'Cliff Strider',
    description: elementalDescription
  },
  {
    categoryName: 'ExtraDimensional',
    categorySize: 10,
    path: 'extradimensional',
    imageSrc: '/assets/images/yielothax.gif',
    futuredName: 'Yielothax',
    description: extraDimensionalDescription
  },
  {
    categoryName: 'Fey',
    categorySize: 13,
    path: 'fey',
    imageSrc: '/assets/images/nymph.gif',
    futuredName: 'Nymph',
    description: feyDescription
  },
  {
    categoryName: 'Giants',
    categorySize: 18,
    path: 'giants',
    imageSrc: '/assets/images/behemoth.gif',
    futuredName: 'Behemoth',
    description: giantsDescription
  },
  {
    categoryName: 'Human',
    categorySize: 74,
    path: 'human',
    imageSrc: '/assets/images/hero.gif',
    futuredName: 'Hero',
    description: humanDescription
  },
  {
    categoryName: 'Humanoid',
    categorySize: 84,
    path: 'humanoid',
    imageSrc: '/assets/images/moohtant.gif',
    futuredName: 'Moohtant',
    description: humanoidDescription
  },
  {
    categoryName: 'Lycanthrope',
    categorySize: 9,
    path: 'lycanthrope',
    imageSrc: '/assets/images/werebear.gif',
    futuredName: 'Werebear',
    description: lycanthropeDescription
  },
  {categoryName: 'Magical', categorySize: 63, path: 'magical', imageSrc: '/assets/images/sightofsurrender.gif', futuredName: 'Sight of Surrender', description: magicalDescription},
  {categoryName: 'Mammal', categorySize: 68, path: 'mammal', imageSrc: '/assets/images/gloomwolf.gif', futuredName: 'Gloom Wolf', description: mammalDescription},
  {categoryName: 'Plant', categorySize: 14, path: 'plant', imageSrc: '/assets/images/cloakofterror.gif', futuredName: 'Cloak of Terror', description: plantDescription},
  {categoryName: 'Reptile', categorySize: 32, path: 'reptile', imageSrc: '/assets/images/seacrest.gif', futuredName: 'Seacrest', description: reptileDescription},
  {categoryName: 'Slime', categorySize: 11, path: 'slime', imageSrc: '/assets/images/devourer.gif', futuredName: 'Devourer', description: slimeDescription},
  {categoryName: 'Undead', categorySize: 69, path: 'undead', imageSrc: '/assets/images/braindeath.gif', futuredName: 'Braindeath', description: undeadDescription},
  {categoryName: 'Vermin', categorySize: 58, path: 'vermin', imageSrc: '/assets/images/tunneltyrant.gif', futuredName: 'Tunnel Tyrant', description: verminDescription}
]

