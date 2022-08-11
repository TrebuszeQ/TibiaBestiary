import { Injectable } from '@angular/core';

import { Category } from './category';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class ViewConditionerService
{
  categoryArray: Category[] = [];
  path = window.location.pathname;
  constructor(private categoryService: CategoryService) { }

  getCategoryArray()
  {
    this.categoryService.fetchCategory().subscribe((categoryArray) => {this.categoryArray = categoryArray});
  }

  selectMonsterCategory()
  {
    for(let i = 0; i < this.categoryArray.length; i++)
    {
      switch(this.path)
      {
        case this.categoryArray[i].path:
          {

          }
      }
    }
    switch(this.path)
    {
      case this.categoryArray[0].path:
    }
  }

}
