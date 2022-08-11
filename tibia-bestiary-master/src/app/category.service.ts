import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Category } from './category';
import { categoryArray } from './category-array';


@Injectable({
  providedIn: 'root'
})
export class CategoryService
{
  constructor() { }

  fetchCategory(): Observable <Category[]>
  {
    return of(categoryArray);
  }
}
