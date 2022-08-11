import { Component, OnInit } from '@angular/core';


import { Category } from '../category';

import { CategoryService } from '../category.service';

@Component({
  selector: 'app-monster-category-body',
  templateUrl: './monster-category-body.component.html',
  styleUrls: ['./monster-category-body.component.css']
})
export class MonsterCategoryBodyComponent implements OnInit {

  categoryArray: Category[] = [];
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void
  {
    this.getCategoryArray();
  }

  getCategoryArray()
  {
    this.categoryService.fetchCategory().subscribe((categoryArray) => {this.categoryArray = categoryArray});
  }
}
