import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

import { Navigations } from '../navigations';

import { NavigationsService } from '../navigations.service';

@Component(
{
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit
{
  navigationsArray: Navigations[] = [];
  search = new FormControl('');
  constructor(private navigationsService: NavigationsService) { }

  ngOnInit(): void
  {
    this.getNavigations();
  }

  route(path: string)
  {
    window.open(path, '_self');
  }

  getNavigations(): void
  {
    this.navigationsService.getNavigationsArray().subscribe(navigationsArray => {this.navigationsArray = navigationsArray});
    return;
  }

  showButtonName(id: string): void
  {
    const element = document.getElementById(id);
    element!.innerHTML = `<h2>${id.toUpperCase()}</h2>`;
  }

  setImgBack(name: string, src: string)
  {
    const element = document.getElementById(name);
    const img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', name);
    element!.innerHTML = '';
    element!.appendChild(img);
  }
}
