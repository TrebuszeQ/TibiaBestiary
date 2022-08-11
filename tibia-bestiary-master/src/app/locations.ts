export interface Locations
{
  name: string;
  parentLocation: string | Locations | Locations[] | string[] | (Locations & string)[];
  path: string | null;
  structuralDepth: number;
}
