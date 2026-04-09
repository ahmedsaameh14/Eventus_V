import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./Eventus-Layout/home/home.component').then(m => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./Eventus-Layout/about/about.component').then(m => m.AboutComponent) },
  { path: 'story', loadComponent: () => import('./Eventus-Layout/story/story.component').then(m => m.StoryComponent) },
  { path: 'gallery', loadComponent: () => import('./Eventus-Layout/gallery/gallery.component').then(m => m.GalleryComponent) },
  { path: 'contact', loadComponent: () => import('./Eventus-Layout/contact/contact.component').then(m => m.ContactComponent) },
];
