//core
import { Component, OnInit } from '@angular/core';
//interfaces
import { Category } from '../category';
//services
import { CategoryService } from '../category.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit
{
  categoryArray: Category[] = [];
  constructor(private categoryService: CategoryService)
  {
  }

  ngOnInit(): void
  {
    this.fetchCategory();
    return;
  }

  fetchCategory(): void
  {
    this.categoryService.fetchCategory().subscribe(categoryArray => {this.categoryArray = categoryArray});
    return;
  }

  openCategory(path: string): void
  {
    path = path.toLowerCase();
    console.log(path);
    window.open(path, '_self');
  }

  categoryDetails(categoryName: string, categorySize: number)
  {
    const tile = document.getElementById(`${categoryName}Button`);
    tile!.style.setProperty('background-color', '#3e3ea8');
    tile!.style.setProperty('outline', '#2d2e34');
    tile!.innerHTML =
    `<h1> Category: </h1> ${categoryName}`;
    //const details = document.getElementById('detailsWrapper');
    //details!.style.setProperty('display', 'grid');
    /*
    tile!.addEventListener("mousemove", (event: MouseEvent) =>
    {
      //details!.style.setProperty('inset', `${event.y / 2}px ${event.x / 2 }px ${event.y / 2 }px ${event.x / 2 }px`);
      details!.style.setProperty('transform', `translate(${event.x}px,${event.y - 50}px)`);
    });
    */
  }

  setImageBack(categoryName: string, imageSrc: string)
    {
      const tile = document.getElementById(`${categoryName}Button`);
      const details = document.getElementById('detailsWrapper');
      details!.style.setProperty('display', 'none');
      tile!.style.setProperty('background-color', '#22366d');
      tile!.style.setProperty('outline', 'none');
      tile!.innerHTML = '';
      const img = document.createElement('img');
      img.setAttribute('src', imageSrc);
      img.setAttribute('alt', categoryName);
      tile!.appendChild(img);
    }
}
