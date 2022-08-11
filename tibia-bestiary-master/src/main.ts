import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production)
{
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

document.onscroll = (event) =>
{
  const navbar = document.getElementById('navbarWrapper');
  const cords = window.scrollY;
  navbar!.style.setProperty('transform', `translateY(${cords}px)`);
}

function moveNavbar(): void
{
  const navbar = document.getElementById('navbarWrapper');
  const cords = window.scrollY;

  window.addEventListener("scroll", (event: Event) =>
  {
    navbar!.style.setProperty('transform', `translateY(${cords}px)`);
  });
  return;
}
