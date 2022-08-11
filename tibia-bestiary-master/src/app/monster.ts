//Interfaces
import { Category } from "./category";
import { Locations } from "./locations";
import { Occurance } from "./occurance-type";
import { Resistances } from "./resistances";
import { MonsterDescription } from "./monster-description";
//Types
import { fightstyle } from "./fightstyle-type";
import { Item } from "./item";
import { Difficulty } from "./difficulty-type";

export interface Monster
{
  name: string,
  category: Category,
  loot: Item | null,
  difficulty: Difficulty,
  occurence: Occurance,
  description: MonsterDescription,
  fightStyle: fightstyle,
  resistance: Resistances;
  locations: string | Locations | Locations[] | string[] | (Locations & string)[];
  hitpoints: number;
  experience: number;
  speed: number;
  armor: number;
  charmPoints: number;
}
