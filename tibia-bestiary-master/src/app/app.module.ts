import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { MonsterCategoryComponent } from './monster-category/monster-category.component';
import { CategoryHeaderComponent } from './category-header/category-header.component';
import { MonsterCategoryBodyComponent } from './monster-category-body/monster-category-body.component';
import { LocationsArrayComponent } from './locations-array/locations-array.component';

@NgModule({
  declarations:
  [
    AppComponent,
    HomepageComponent,
    NavigationComponent,
    FooterComponent,
    MonsterCategoryComponent,
    CategoryHeaderComponent,
    MonsterCategoryBodyComponent,
    LocationsArrayComponent,
  ],
  imports:
  [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
