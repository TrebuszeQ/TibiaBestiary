import { MonsterDescription } from "./monster-description"

///Methods
export function searchForDescription(name: string)
{
  const index = monsterDescriptionsArray.findIndex((value) =>
  {
    const newValueName = value.name.trim().toLowerCase();
    const newName = name.trim().toLowerCase()
    return newValueName === newName;
  })
  return monsterDescriptionsArray[index];
}

///Array
export const monsterDescriptionsArray: MonsterDescription[] =
[
  {name: 'Toad', text: ''},
  {name: 'Green Frog', text: ''},
  {name: 'Azure Frog', text: ''},
]
