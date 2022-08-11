import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { MonsterCategoryComponent } from './monster-category/monster-category.component';
import { LocationsArrayComponent } from './locations-array/locations-array.component';

const routes: Routes =
[
  {path: '', component: HomepageComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'locationsarray', component: LocationsArrayComponent},

  {path: 'amphibic', component: MonsterCategoryComponent},
  {path: 'aquatic', component: MonsterCategoryComponent},
  {path: 'bird', component: MonsterCategoryComponent},
  {path: 'construct', component: MonsterCategoryComponent},
  {path: 'demon', component: MonsterCategoryComponent},
  {path: 'dragon', component: MonsterCategoryComponent},
  {path: 'elemental', component: MonsterCategoryComponent},
  {path: 'extradimensional', component: MonsterCategoryComponent},
  {path: 'fey', component: MonsterCategoryComponent},
  {path: 'giants', component: MonsterCategoryComponent},
  {path: 'human', component: MonsterCategoryComponent},
  {path: 'humanoid', component: MonsterCategoryComponent},
  {path: 'lycanthrope', component: MonsterCategoryComponent},
  {path: 'magical', component: MonsterCategoryComponent},
  {path: 'mammal', component: MonsterCategoryComponent},
  {path: 'plant', component: MonsterCategoryComponent},
  {path: 'reptile', component: MonsterCategoryComponent},
  {path: 'slime', component: MonsterCategoryComponent},
  {path: 'undead', component: MonsterCategoryComponent},
  {path: 'vermin', component: MonsterCategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
