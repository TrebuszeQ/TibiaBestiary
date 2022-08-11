import { Component, Input, OnInit } from '@angular/core';

import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-header',
  templateUrl: './category-header.component.html',
  styleUrls: ['./category-header.component.css']
})
export class CategoryHeaderComponent implements OnInit
{
  path = window.location.pathname;
  categoryArray: Category[] = [];
  constructor(private categoryService: CategoryService)
  {
  }

  ngOnInit(): void
  {
    this.getPagePath();
    this.getCategoryArray();
    this.getIndice();
  }

  getPagePath()
  {
    console.warn(this.path);
  }

  getCategoryArray()
  {
    this.categoryService.fetchCategory().subscribe((categoryArray) => {this.categoryArray = categoryArray});
  }

  getIndice(): number
  {
    const keyword = this.path.slice(1, this.path.length).trim();
    const indice = this.categoryArray.findIndex((value: Category) =>
    {
      let x: string = value.categoryName.toLocaleLowerCase().trim();
      return x === keyword;
    });
    return indice;
  }
}
